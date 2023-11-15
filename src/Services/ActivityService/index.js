import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuthHeaders } from "../baseQueries";

export const activityApi = createApi({
  reducerPath: "activityApi",
  baseQuery: baseQueryWithAuthHeaders,
  endpoints: (build) => ({
    getActivity: build.query({
      query: (params) => ({
        url: "activity/filter/",
        method: "GET",
        params,
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetActivityQuery } = activityApi;
