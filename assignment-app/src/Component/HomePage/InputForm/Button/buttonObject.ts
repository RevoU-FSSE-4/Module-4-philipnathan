export interface ButtonObjectInterface {
    id: string;
    type: "button" | "submit";
    label: string;
    style: string;
}

const loginButton: ButtonObjectInterface[] = [
    {
        id: "registerButton",
        type: "button",
        label: "Create new account?",
        style: "",
    },
    {
        id: "inputLoginButton",
        type: "submit",
        label: "Login",
        style: "border border-grey-900 rounded py-2 px-4",
    },
];

const registerButton: ButtonObjectInterface[] = [
    {
        id: "loginButton",
        type: "button",
        label: "Already have an account?",
        style: "",
    },
    {
        id: "submitRegisterButton",
        type: "submit",
        label: "Register",
        style: "",
    },
];

export const buttonObjectArray: ButtonObjectInterface[][] = [
    loginButton,
    registerButton,
];
