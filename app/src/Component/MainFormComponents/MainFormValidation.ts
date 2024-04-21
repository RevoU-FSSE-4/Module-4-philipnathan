import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(3, "Too Short!")
        .max(30, "Too Long!")
        .required("Please input your Full Name"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required."),
    street: Yup.string()
        .min(3, "Too Short!")
        .max(30, "Too Long!")
        .required("Street name is required."),
    city: Yup.string()
        .min(3, "Too Short!")
        .max(30, "Too Long!")
        .required("City name is required."),
    state: Yup.string()
        .min(3, "Too Short!")
        .max(30, "Too Long!")
        .required("State name is required."),
    zip: Yup.string()
        .min(5, "Zipcode consist of 5 number")
        .max(5, "Zipcode consist of 5 number")
        .required("Zip Code is required."),
    username: Yup.string()
        .min(4, "Minimum 4 Letters")
        .max(20, "Maximum 20 Letters")
        .required("Username is required."),
    password: Yup.string()
        .min(8, "password must contain 8 or more characters")
        .minLowercase(1, "password must contain at least 1 lower case letter")
        .minUppercase(1, "password must contain at least 1 upper case letter")
        .minNumbers(1, "password must contain at least 1 number")
        .minSymbols(1, "password must contain at least 1 special character"),
});
