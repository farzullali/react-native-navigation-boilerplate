import {baseApi} from '../baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getUser: build.query({
      query: id => `users/${id}`,
      providesTags: (result, error, id) => [{type: 'User', id}],
    }),

    updateUser: build.mutation({
      query: data => ({
        url: `users/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      async onQueryStarted({id, ...patch}, {dispatch, queryFulfilled}) {
        // Optimistik update
        const patchResult = dispatch(
          userApi.util.updateQueryData('getUser', id, draft => {
            Object.assign(draft, patch);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {useGetUserQuery, useUpdateUserMutation} = userApi;
