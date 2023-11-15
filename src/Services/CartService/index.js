import { createApi } from "@reduxjs/toolkit/query/react";
import { publicBaseQuery } from "../baseQueries";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: publicBaseQuery,
  tagTypes: ["cart"],
  endpoints: (build) => ({
    addToCart: build.mutation({
      query: ({ data }) => ({
        url: "cart/add/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    getCart: build.query({
      query: (id) => ({
        url: `cart/${id}`,
        method: "GET",
      }),
      providesTags: ["cart"],
      transformResponse: (response) => response,
    }),
  }),
});

export const { useAddToCartMutation, useGetCartQuery } = cartApi;
