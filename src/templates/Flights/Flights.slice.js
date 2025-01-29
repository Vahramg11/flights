import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: [],
};

const airportSlice = createSlice({
  name: "airports",
  initialState,

  reducers: {
    change_airports(state, action) {
      state.airports = action.payload;
    },
  },
});

export const { change_airports } = airportSlice.actions;
export default airportSlice.reducer;
