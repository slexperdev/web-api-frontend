import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuthHeaders } from "../baseQueries";

export const cruiseApi = createApi({
  reducerPath: "cruiseApi",
  baseQuery: baseQueryWithAuthHeaders,
  endpoints: (build) => ({
    getCruise: build.query({
      query: () => ({
        url: "admin/companies/",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetCruiseQuery } = cruiseApi;
