import i18n from "language/i18n";
import { store } from "store";

const { appLang } = store.getState().auth;

const ScreenNames = {
  BottomTabs: "BottomTabsNavigation",
  Main: "MainStack",
  Splash: "SplashScreen",
  Onboarding: "OnboardingScreen",
  Home: i18n.t("Home"),
  MyTickets: i18n.t("My Ticket"),
  Notification: i18n.t("Notification"),
  Profile: i18n.t("Profile"),
  Login: "Login",
  Signup: "Signup",
  Otp: "Otp",
  ForgetPassword: "ForgetPassword",
  chooseStation: "chooseStation",
  payment: "payment",
  congratulation: "congratulation",
  TripsScreen: "TripsScreen",
  SeatsScreen: "SeatsScreen",
  ChooseStationScreen: "ChooseStationScreen",
  TicketDetailsScreen: "TicketDetailsScreen",
  ProfileSetting: "ProfileSetting",
  LanguageScreen: "LanguageScreen",
  // Add more screen names here as needed
};

export default Object.freeze(ScreenNames);
