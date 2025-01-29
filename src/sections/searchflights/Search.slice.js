import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: [],
  originSkyId: "EVN",
  originEntityId: "95673518",
  destinationSkyId: "TIA",
  destinationEntityId: "128669056",

  flightTypes: [
    "Economy",
    "Premium Economy",
    "Business",
    "First Class",
    "First Class Suite",
  ],
  selectedFlightType: "Economy",
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setSelectedFlightType: (state, action) => {
      state.selectedFlightType = action.payload;
    },
    setOriginSkyId: (state, action) => {
      state.originSkyId = action.payload;
    },
    setOriginEntityId: (state, action) => {
      state.originEntityId = action.payload;
    },
    setDestinationSkyId: (state, action) => {
      state.destinationSkyId = action.payload;
    },
    setDestinationEntityId: (state, action) => {
      state.destinationEntityId = action.payload;
    },
  },
});

export const {
  setSelectedFlightType,
  setOriginSkyId,
  setOriginEntityId,
  setDestinationSkyId,
  setDestinationEntityId,
} = flightSlice.actions;

export default flightSlice.reducer;
