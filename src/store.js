import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./sections/searchflights/Search.slice.js";
import toolReducer from "./sections/usefulTools/UsefulTools.slice.js"
import airports from "./templates/Flights/Flights.slice.js";
// const reducer = (state = {}, action) => state;

const store = configureStore({
  reducer: {
    flight: flightReducer,
    tools: toolReducer,
    airports : airports
  },
});

export default store;
