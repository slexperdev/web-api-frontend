import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuthHeaders } from "../baseQueries";

export const configApi = createApi({
  reducerPath: "configApi",
  baseQuery: baseQueryWithAuthHeaders,
  endpoints: (build) => ({
    getDepartures: build.query({
      query: () => ({
        url: "departure/",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
    getArrivals: build.query({
      query: () => ({
        url: "arrival/",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
    getProviders: build.query({
      query: () => ({
        url: "provider/",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
    getDestinations: build.query({
      query: () => ({
        url: "destination/",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetDeparturesQuery,
  useGetArrivalsQuery,
  useGetProvidersQuery,
  useGetDestinationsQuery,
} = configApi;
