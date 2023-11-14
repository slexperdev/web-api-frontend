import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuthHeaders } from "../baseQueries";

export const activityApi = createApi({
  reducerPath: "activityApi",
  baseQuery: baseQueryWithAuthHeaders,
  endpoints: (build) => ({
    getActivity: build.query({
      query: () => ({
        url: "activity/filter/",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetActivityQuery } = activityApi;
