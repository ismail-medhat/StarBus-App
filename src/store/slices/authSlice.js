// mySlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import Axios from "services/Axios";

const initialState = {
  token: null,
  authloading: false,
  sliderloading: false,
  userData: [],
  sliders: [],
  isSkip: false,
  appLang: "en",
};

// ##### start Login existing user action #####
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const res = await Axios({
        method: "POST",
        path: "login",
        data: formData,
        isFormDate: true,
      });
      console.log("loginUser Data ", res?.data?.data);
      return res.data?.data;
    } catch (error) {
      let err = error?.response?.data || error;
      console.log("loginUser Error " + JSON.stringify(err));
      return rejectWithValue(err);
    }
  }
);

// ##### end Login existing user action #####
//------------------------------------------------
// ##### start Signup new user action #####
export const signupNewUser = createAsyncThunk(
  "auth/signupNewUser",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const res = await Axios({
        method: "POST",
        path: "signup",
        data: formData,
        isFormDate: true,
      });
      console.log("signupNewUser Data ", res?.data?.data);
      return res.data?.data;
    } catch (error) {
      let err = error?.response?.data || error;
      console.log("signupNewUser Error " + JSON.stringify(err));
      return rejectWithValue(err);
    }
  }
);
// ##### end Signup new user action #####
//------------------------------------------------
// ##### start get onboarding sliders action #####
export const getSliders = createAsyncThunk(
  "auth/getSliders",
  async (_, { rejectWithValue, getState }) => {
    try {
      const res = await Axios({
        method: "GET",
        path: "onboardingSlider",
      });
      console.log("getSliders Data ", res?.data);
      return res.data;
    } catch (error) {
      let err = error?.response?.data || error;
      console.log("getSliders Error " + JSON.stringify(err));
      return rejectWithValue(err);
    }
  }
);
// ##### end get onboarding sliders action #####
//------------------------------------------------

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAppLang: (state, action) => {
      state.appLang = action.payload;
    },
    setIsSkip: (state, action) => {
      state.isSkip = action.payload;
    },
    logoutUser: (state) => {
      state.token = null;
      state.userData = [];
    },
  },
  extraReducers: (builder) => {
    // ##### start Login existing user reducer #####
    builder
      .addCase(loginUser.pending, (state) => {
        console.log("start loading");
        state.authloading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authloading = false;
        state.userData = action.payload?.user;
        state.token = action.payload?.access_token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authloading = false;
        state.userData = [];
        state.token = null;
      });
    // ##### end Login existing user reducer #####
    //------------------------------------------------
    // ##### start Signup new user reducer #####
    builder
      .addCase(signupNewUser.pending, (state) => {
        state.authloading = true;
      })
      .addCase(signupNewUser.fulfilled, (state, action) => {
        state.authloading = false;
      })
      .addCase(signupNewUser.rejected, (state, action) => {
        state.authloading = false;
      });
    // ##### end Signup new user reducer #####
    //------------------------------------------------
    // ##### start get onboarding sliders reducer #####
    builder
      .addCase(getSliders.pending, (state) => {
        state.sliderloading = true;
      })
      .addCase(getSliders.fulfilled, (state, action) => {
        state.sliderloading = false;
        state.sliders = action.payload;
      })
      .addCase(getSliders.rejected, (state, action) => {
        state.sliderloading = false;
        state.sliders = [];
      });
    // ##### end get onboarding sliders reducer #####
    //------------------------------------------------
  },
});

export const useCurrentLangSelector = () =>
  useSelector((state) => state.auth.appLang);

export const { setAppLang, setIsSkip, logoutUser } = authSlice.actions;

export default authSlice.reducer;
