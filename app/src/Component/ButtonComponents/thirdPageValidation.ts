import { MainFormInterface } from "../MainFormComponents/MainFormInterface";
import { FormikProps } from "formik";

export const thirdPageValidation = (
    value: FormikProps<MainFormInterface>
): boolean => {
    return usernameValidation(value) || passwordValidation(value);
};

const usernameValidation = (value: FormikProps<MainFormInterface>): boolean => {
    return "username" in value.errors;
};

const passwordValidation = (value: FormikProps<MainFormInterface>): boolean => {
    return "password" in value.errors;
};
