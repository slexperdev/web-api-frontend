import { createApi } from "@reduxjs/toolkit/query/react";
import { publicBaseQuery } from "../baseQueries";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: publicBaseQuery,
  endpoints: (build) => ({
    signIn: build.mutation({
      query: ({ loginState }) => ({
        url: "login/",
        method: "POST",
        body: loginState,
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;
