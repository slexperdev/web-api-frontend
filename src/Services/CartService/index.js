import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuthHeaders } from "../baseQueries";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: baseQueryWithAuthHeaders,
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
    removeCartItem: build.mutation({
      query: ({ cartId, itemId }) => ({
        url: `cart/remove/${cartId}/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
    checkout: build.mutation({
      query: ({ data }) => ({
        url: "checkout/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveCartItemMutation,
  useCheckoutMutation,
} = cartApi;
