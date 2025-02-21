import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  getToken,
  getRefreshToken,
  setTokens,
  clearTokens,
} from '../mmkv/storage';
import { RootState as AppRootState } from '../index';

const BASE_URL = 'https://api.yourapp.com';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: headers => {
    const token = getToken();
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Try to refresh token
    const refreshToken = await getRefreshToken();

    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: '/auth/refresh',
          method: 'POST',
          body: {refreshToken},
        },
        api,
        extraOptions,
      );

      if (refreshResult.data) {
        const {accessToken, refreshToken: newRefreshToken} =
          refreshResult.data as {accessToken: string; refreshToken: string};
        setTokens(accessToken, newRefreshToken);

        // Retry original query with new token
        result = await baseQuery(args, api, extraOptions);
      } else {
        clearTokens();
      }
    }
  }

  return result;
};

// Base API configuration with auth header
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers, { getState }) => {
      // Get token from state
      const token = (getState() as AppRootState).auth.token;
      
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  keepUnusedDataFor: 300,
  // Automatic retry on error
  refetchOnReconnect: true,
  tagTypes: ['User', 'Profile'],
});
