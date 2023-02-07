import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create api => create internally slice
export const usersapi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
    }),
    getUserById: builder.query({
      query: (userid) => `users/${userid}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersapi;
