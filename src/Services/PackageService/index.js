import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuthHeaders } from "../baseQueries";

export const packageApi = createApi({
  reducerPath: "packageApi",
  baseQuery: baseQueryWithAuthHeaders,
  endpoints: (build) => ({
    getPackage: build.query({
      query: () => ({
        url: "package/filter/",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetPackageQuery } = packageApi;
