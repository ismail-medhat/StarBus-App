import axios from "axios";
import { store } from "store";
import Toast from "react-native-toast-message";

const BASE_URL = "https://mdsapps.net/api/";

export const APIS = {
  // =================== Onboarding Slider =================== //
  onboardingSlider: "outside/sliders/all",
  // =================== Authentication =================== //
  login: "outside/login",
  signup: "outside/signup",
  // =================== Cities =================== //
  cities: "outside/cities/getAllCities",
  // =================== Ticket =================== //
  ticketInfo: "outside/paymnet/BookingTicketForUser",
  // ====================================== //
  trips: "outside/searchRide/get",
  stations: "outside/searchRide/get-station",
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    let errRes = error?.response?.data?.error;
    errRes &&
      Toast.show({
        type: "error",
        text1: errRes,
      });
    return Promise.reject(error);
  }
);

const Axios = async ({
  method,
  path,
  data,
  params,
  header = {},
  pathParams = "",
  isFormDate = false,
}) => {
  // const accessToken = '34|Sv4tSqMBG1fOIOkg2urRnDTRBQwhtMCXw8jUcOvo4ceebedb'
  const accessToken = store.getState().auth?.token;
  console.log("TOKEN : ", accessToken);

  const authHeder = accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
      }
    : {};

  const response = await axiosInstance({
    method: method,
    url: APIS[path] + pathParams,
    data: data,
    params: params,
    headers: isFormDate
      ? {
          "Content-Type": "multipart/form-data",
          ...authHeder,
          ...header,
        }
      : {
          "Content-Type": "application/json",
          ...authHeder,
          ...header,
        },
  });
  return response;
};

export default Axios;
