// mySlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "services/Axios";

const initialState = {
  stationsLoading: false,
  allStations: {},
};

export const getAllStations = createAsyncThunk(
  "stations/getAllStations",
  async ({ formData }, { rejectWithValue, getState }) => {
    try {
      const res = await Axios({
        method: "post",
        path: "stations",
        data: formData,
        isFormDate: true
      });

      return res.data?.data;
    } catch (error) {
      let err = error?.response?.data || error;
      console.log("getAllStations Error " + JSON.stringify(err));
      return rejectWithValue(err);
    }
  }
);

//------------------------------------------------

const stationsSlice = createSlice({
  name: "stations",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStations.pending, (state) => {
        state.allStations = true;
      })
      .addCase(getAllStations.fulfilled, (state, action) => {
        state.stationsLoading = false;
        state.allStations = action.payload;
      })
      .addCase(getAllStations.rejected, (state, action) => {
        state.allStations = false;
        state.equipHisReportData = [];
      });
    //------------------------------------------------
  },
});

export default stationsSlice.reducer;
