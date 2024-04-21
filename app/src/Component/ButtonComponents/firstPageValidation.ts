import { MainFormInterface } from "../MainFormComponents/MainFormInterface";
import { FormikProps } from "formik";

export const firstPageValidation = (
    value: FormikProps<MainFormInterface>
): boolean => {
    return fullNameValidation(value) || emailValidation(value);
};
const fullNameValidation = (value: FormikProps<MainFormInterface>): boolean => {
    return "fullName" in value.errors;
};
const emailValidation = (value: FormikProps<MainFormInterface>): boolean => {
    return "email" in value.errors;
};
