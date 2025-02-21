import { baseApi } from '../baseApi';
import { setTokens, clearTokens } from '../../mmkv/storage';
import { 
  LoginCredentials, 
  LoginResponse, 
} from '../../../types/store/auth.type';
import { AuthError } from '../../../types/store/errors.type';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      // Handle successful login
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          setTokens(data.token, data.refreshToken);
        } catch (error) {
          // Error handling is done by RTK Query
        }
      },
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      // Handle successful logout
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          await clearTokens();
        } catch {
          // Error handling is done by RTK Query
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
} = authApi; 