export interface LoginRegisterPage {
    id: string;
    type: string;
    label: string;
}

export const loginPage: LoginRegisterPage[] = [
    {
        id: "loginEmail",
        type: "email",
        label: "Email",
    },
    {
        id: "loginPassword",
        type: "password",
        label: "Password",
    },
];

export const registerPage: LoginRegisterPage[] = [
    {
        id: "username",
        type: "text",
        label: "Username",
    },
    {
        id: "registerEmail",
        type: "email",
        label: "email",
    },
    {
        id: "registerPassword",
        type: "password",
        label: "Password",
    },
];

export const homePageObject: LoginRegisterPage[][] = [loginPage, registerPage];
