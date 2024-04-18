import * as EmailValidator from "email-validator";
import { passwordStrength } from "check-password-strength";

const validator = (id: string, value: any) => {
    switch (id) {
        case "fullName":
        case "street":
        case "city":
        case "state":
        case "username":
            return value.length > 5;
        case "email":
            return EmailValidator.validate(value); // true false
        case "birth":
            return;
        case "password":
            return;
        case "zip":
            return value.toString().length === 5;
        default:
            break;
    }
};
