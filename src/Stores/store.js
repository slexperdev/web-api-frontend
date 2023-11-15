import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";

import { cruiseReducer } from "./cruise";

import { authApi } from "../Services/AuthService";
import { cruiseApi } from "../Services/CruiseService";
import { activityApi } from "../Services/ActivityService";
import { packageApi } from "../Services/PackageService";
import { configApi } from "../Services/ConfigService";
import { cartApi } from "../Services/CartService";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    cruise: cruiseReducer,
    [authApi.reducerPath]: authApi.reducer,
    [cruiseApi.reducerPath]: cruiseApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    [packageApi.reducerPath]: packageApi.reducer,
    [configApi.reducerPath]: configApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(cruiseApi.middleware)
      .concat(activityApi.middleware)
      .concat(packageApi.middleware)
      .concat(configApi.middleware)
      .concat(cartApi.middleware),
});

setupListeners(store.dispatch);
