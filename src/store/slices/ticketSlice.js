// mySlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "services/Axios";

const initialState = {
  ticketloading: false,
  ticketInfo: [],
};

// ##### start ticket details action #####
export const getTicketInfo = createAsyncThunk(
  "ticket/getTicketInfo",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const res = await Axios({
        method: "POST",
        path: "ticketInfo",
        data: formData,
        isFormDate: true,
      });
      console.log("getTicketInfo Data ", res?.data?.data);
      return res.data?.data;
    } catch (error) {
      let err = error?.response?.data || error;
      console.log("getTicketInfo Error " + JSON.stringify(err));
      return rejectWithValue(err);
    }
  }
);

// ##### end ticket details action #####

const ticketSlice = createSlice({
  name: "ticket",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ##### start ticket details reducer #####
    builder
      .addCase(getTicketInfo.pending, (state) => {
        state.ticketloading = true;
      })
      .addCase(getTicketInfo.fulfilled, (state, action) => {
        state.ticketloading = false;
        state.ticketInfo = action.payload;
      })
      .addCase(getTicketInfo.rejected, (state, action) => {
        state.ticketloading = false;
        state.ticketInfo = [];
      });
    // ##### end ticket details reducer #####
    //------------------------------------------------
  },
});

export default ticketSlice.reducer;
