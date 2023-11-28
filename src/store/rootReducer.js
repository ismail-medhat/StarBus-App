// rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import citiesSlice from "./slices/citiesSlice";
import tripsSlice from "./slices/tripsSlice";
import stationsSlice from "./slices/stationsSlice";
import ticketSlice from "./slices/ticketSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  cities: citiesSlice,
  trips: tripsSlice,
  stations: stationsSlice,
  ticket: ticketSlice,
  // Add more slices here if you have multiple slices in your app
});

export default rootReducer;
