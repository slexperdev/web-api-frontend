import { createSlice } from "@reduxjs/toolkit";

const activitySlice = createSlice({
  name: "activity",
  initialState: {
    activity: {},
  },
  reducers: {
    setActivity: (state, action) => {
      state.activity = action.payload;
    },
    clearActivity: (state) => {
      state.activity = {};
    },
  },
});

export const { setActivity, clearActivity } = activitySlice.actions;
export const activityReducer = activitySlice.reducer;
