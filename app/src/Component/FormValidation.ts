import { InputValueContainer } from "./MainFormInterface";
const validator = require("validator");

export const isPageOneNotFilled = (value: InputValueContainer): boolean => {
    return (
        isFullnameNotFilled(value.fullName) ||
        isEmailNotFilled(value.email) ||
        isDateNotFilled(value.birth)
    );
};

const isFullnameNotFilled = (value: string): boolean => {
    return value === "";
};
const isEmailNotFilled = (value: string): boolean => {
    return !validator.isEmail(value);
};
const isDateNotFilled = (value: Date): boolean => {
    return (
        !validator.isBefore(value.toString(), new Date().toString()) ||
        !validator.isAfter(value.toString(), new Date(0).toString())
    );
};

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
