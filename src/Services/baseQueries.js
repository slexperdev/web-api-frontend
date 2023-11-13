import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Config } from "../Config";
import { Constant } from "../Constant";

export const publicBaseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
});

export const baseQueryWithAuthHeaders = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: async (headers) => {
    const token = await localStorage.getItem(Constant.TOKEN);

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
