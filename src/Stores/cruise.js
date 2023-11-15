import { createSlice } from "@reduxjs/toolkit";

const cruiseSlice = createSlice({
  name: "cruise",
  initialState: {
    cruise: {},
  },
  reducers: {
    setCruise: (state, action) => {
      state.cruise = action.payload;
    },
    clearCruise: (state) => {
      state.cruise = {};
    },
  },
});

export const { setCruise, clearCruise } = cruiseSlice.actions;
export const cruiseReducer = cruiseSlice.reducer;
