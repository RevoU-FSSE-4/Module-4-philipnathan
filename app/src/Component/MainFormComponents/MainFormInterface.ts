export interface MainFormInterface {
    fullName: string;
    email: string;
    birth: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    username: string;
    password: string;
}

export const MainFormInitialValues: MainFormInterface = {
    fullName: "",
    email: "",
    birth: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    username: "",
    password: "",
};
