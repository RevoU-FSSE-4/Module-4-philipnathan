import { MainFormInterface } from "../MainFormComponents/MainFormInterface";
import { FormikProps } from "formik";
import { firstPageValidation } from "./firstPageValidation";
import { secondPageValidation } from "./secondPageValidation";
import { thirdPageValidation } from "./thirdPageValidation";

export const formButtonValidation = (
    value: FormikProps<MainFormInterface>,
    pageNumber: number
): boolean => {
    switch (pageNumber) {
        case 0:
            return firstPageValidation(value);
        case 1:
            return secondPageValidation(value);
        case 2:
            return thirdPageValidation(value);
        default:
            return true;
    }
};
