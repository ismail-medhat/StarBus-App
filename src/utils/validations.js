import * as Yup from "yup";

// start login user validation schema
const loginValidationSchema = Yup.object({
  tel_number: Yup.string()
    .required("Phone number field is required")
    .min(11, "The phone number must be 11 characters long"),
  password: Yup.string()
    .required("Password field is required")
    .matches(
      /^(?=.*[!@#$%^&])/,
      "Password must contain at least one special character (!@#$%^&)"
    )
    .min(8, "The password must be at least 8 characters"),
});

// start signup user validation schema
const signupValidationSchema = Yup.object({
  name: Yup.string()
    .required("Name field is required")
    .min(5, "Your name must be at least 5 characters long"),
  tel_number: Yup.string()
    .required("Phone number field is required")
    .min(11, "The phone number must be 11 characters long"),
  password: Yup.string()
    .required("Password field is required")
    .matches(
      /^(?=.*[!@#$%^&])/,
      "Password must contain at least one special character (!@#$%^&)"
    )
    .min(8, "Password must be at least 8 characters long"),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please Confirm your Password"),
});

export { loginValidationSchema, signupValidationSchema };
