import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "language/i18n";
import Toast from "react-native-toast-message";
import Axios from "services/Axios";

const initialState = {
  tripsLoading: false,
  allTrips: {}, // Change to an object to store trips by date
};

// ##### start get all cities action #####
export const getAllTrips = createAsyncThunk(
  "trips/getAllTrips",
  async ({ formData, date: selectedDate }, { rejectWithValue, getState }) => {

    try {
      const res = await Axios({
        method: "post",
        path: "trips",
        data: formData,
        isFormDate: true
      });

      return { date: selectedDate, trips: res.data.data };

    } catch (error) {
      let err = error?.response?.data || error;
      // console.log("getAllTrips Error " + JSON.stringify(err));
      return rejectWithValue(selectedDate);
    }
  }
);

//------------------------------------------------

const tripsSlice = createSlice({
  name: "trips",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ##### start get all cities reducer #####
    builder
      .addCase(getAllTrips.pending, (state) => {
        state.tripsLoading = true;
      })
      .addCase(getAllTrips.fulfilled, (state, action) => {
        const { date, trips } = action.payload;
        state.allTrips[ date ] = trips; // Store trips by date
        state.tripsLoading = false;
        !trips.length &&
          Toast.show({
            type: "error",
            text1: i18n.t('noDataTrips'),
          });
      })
      .addCase(getAllTrips.rejected, (state, action) => {
        state.allTrips[ action.payload ] = []; // Store trips by date
        state.tripsLoading = false;
        state.equipHisReportData = [];
        Toast.show({
          type: "error",
          text1: i18n.t('noDataTrips'),
        });
      });

    //------------------------------------------------
  },
});

export default tripsSlice.reducer;
