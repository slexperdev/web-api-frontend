import { createSlice } from "@reduxjs/toolkit";

const packageSlice = createSlice({
  name: "pack",
  initialState: {
    pack: {},
  },
  reducers: {
    setPackage: (state, action) => {
      state.pack = action.payload;
    },
    clearPackage: (state) => {
      state.pack = {};
    },
  },
});

export const { setPackage, clearPackage } = packageSlice.actions;
export const packageReducer = packageSlice.reducer;
