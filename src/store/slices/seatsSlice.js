// mySlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "services/Axios";

const initialState = {
  seatsLoading: false,
  seats: {},
};

export const getSeats = createAsyncThunk(
  "seats/getSeats",
  async ({ formData }, { rejectWithValue, getState }) => {
    try {
      const res = await Axios({
        method: "post",
        path: "seats",
        data: formData,
        isFormDate: true
      });

      return res.data?.data;
    } catch (error) {
      let err = error?.response?.data || error;
      console.log("getseats Error " + JSON.stringify(err));
      return rejectWithValue(err);
    }
  }
);

//------------------------------------------------

const seatsSlice = createSlice({
  name: "seats",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSeats.pending, (state) => {
        state.seats = true;
      })
      .addCase(getSeats.fulfilled, (state, action) => {
        state.seatsLoading = false;
        state.seats = action.payload;
      })
      .addCase(getSeats.rejected, (state, action) => {
        state.seats = false;
        state.equipHisReportData = [];
      });
    //------------------------------------------------
  },
});

export default seatsSlice.reducer;
