import { MainFormInterface } from "../MainFormComponents/MainFormInterface";
import { FormikProps } from "formik";

export const secondPageValidation = (
    value: FormikProps<MainFormInterface>
): boolean => {
    return (
        streetValidation(value) ||
        cityValidation(value) ||
        stateValidation(value) ||
        zipValidation(value)
    );
};

const streetValidation = (value: FormikProps<MainFormInterface>): boolean => {
    return "street" in value.errors;
};
const cityValidation = (value: FormikProps<MainFormInterface>): boolean => {
    return "city" in value.errors;
};
const stateValidation = (value: FormikProps<MainFormInterface>): boolean => {
    return "state" in value.errors;
};
const zipValidation = (value: FormikProps<MainFormInterface>): boolean => {
    return "zip" in value.errors;
};
