// mySlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "services/Axios";

const initialState = {
  cityloading: false,
  allCities: [],
};

// ##### start get all cities action #####
export const getAllCities = createAsyncThunk(
  "auth/getAllCities",
  async (_, { rejectWithValue, getState }) => {
    try {
      const res = await Axios({
        method: "GET",
        path: "cities",
      });
      console.log("getAllCities Data ", res?.data?.cities);
      return res.data?.cities;
    } catch (error) {
      let err = error?.response?.data || error;
      console.log("getAllCities Error " + JSON.stringify(err));
      return rejectWithValue(err);
    }
  }
);

// ##### end get all cities action #####
//------------------------------------------------

const citiesSlice = createSlice({
  name: "cities",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ##### start get all cities reducer #####
    builder
      .addCase(getAllCities.pending, (state) => {
        state.cityloading = true;
      })
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.cityloading = false;
        state.allCities = action.payload;
      })
      .addCase(getAllCities.rejected, (state, action) => {
        state.cityloading = false;
        state.equipHisReportData = [];
      });
    // ##### end get all cities reducer #####
    //------------------------------------------------
  },
});

export default citiesSlice.reducer;
