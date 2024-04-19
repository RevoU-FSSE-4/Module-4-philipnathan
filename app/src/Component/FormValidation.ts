import { InputValueContainer } from "./MainFormInterface";
import * as EmailValidator from "email-validator";

export const isPageOneNotFilled = (value: InputValueContainer): boolean => {
    return (
        isFullnameNotFilled(value.fullName) || isEmailNotFilled(value.email)
        // isDateNotFilled(value.date)
    );
};

const isFullnameNotFilled = (value: string): boolean => {
    return value === "";
};
const isEmailNotFilled = (value: string): boolean => {
    return !EmailValidator.validate(value);
};
// const isDateNotFilled = (value: Date): boolean => {
//     return value === new Date(0);
// };

export const isPageTwoNotFilled = (value: InputValueContainer): boolean => {
    return (
        isStreetNotFilled(value.street) ||
        isCityNotFilled(value.city) ||
        isZipNotFilled(value.zip)
    );
};

const isStreetNotFilled = (value: string): boolean => {
    return value.length <= 5;
};
const isCityNotFilled = (value: string): boolean => {
    return value.length <= 5;
};
const isZipNotFilled = (value: string): boolean => {
    return value.length !== 5 || value === "";
};

export const isPageThreeNotFilled = (value: InputValueContainer): boolean => {
    return (
        isUsernameNotFilled(value.username) ||
        isPasswordNotFilled(value.password)
    );
};

const isUsernameNotFilled = (value: string): boolean => {
    return value.length <= 4;
};
const isPasswordNotFilled = (value: string): boolean => {
    return value.length <= 8;
};
