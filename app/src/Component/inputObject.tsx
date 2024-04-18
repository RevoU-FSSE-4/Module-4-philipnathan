const boxStyle: string = "border-solid border-black border rounded mb-2";
const boxLabelStyle: string = "text-base font-bold";

export interface InputProperties {
    label: string;
    type: string;
    id: string;
    boxStyle?: string;
    boxLabelStyle?: string;
    validator?: string;
}

const personalInformation: InputProperties[] = [
    {
        label: "Full Name",
        type: "text",
        id: "fullName",
        boxStyle: boxStyle,
        boxLabelStyle: boxLabelStyle,
    },
    {
        label: "Email",
        type: "email",
        id: "email",
        boxStyle: boxStyle,
        boxLabelStyle: boxLabelStyle,
    },
    {
        label: "Date of Birth",
        type: "date",
        id: "birth",
        boxStyle: boxStyle,
        boxLabelStyle: boxLabelStyle,
    },
];

const addressInformation: InputProperties[] = [
    {
        label: "Street Adress",
        type: "text",
        id: "street",
        boxStyle: boxStyle,
        boxLabelStyle: boxLabelStyle,
    },
    {
        label: "City",
        type: "text",
        id: "city",
        boxStyle: boxStyle,
        boxLabelStyle: boxLabelStyle,
    },
    {
        label: "State",
        type: "text",
        id: "state",
        boxStyle: boxStyle,
        boxLabelStyle: boxLabelStyle,
    },
    {
        label: "Zip Code",
        type: "number",
        id: "zip",
        boxStyle: boxStyle,
        boxLabelStyle: boxLabelStyle,
    },
];

const accountInformation: InputProperties[] = [
    {
        label: "Username",
        type: "text",
        id: "username",
        boxStyle: boxStyle,
        boxLabelStyle: boxLabelStyle,
    },
    {
        label: "Password",
        type: "password",
        id: "password",
        boxStyle: boxStyle,
        boxLabelStyle: boxLabelStyle,
    },
];

const informationArray: InputProperties[][] = [
    personalInformation,
    addressInformation,
    accountInformation,
];

export default informationArray;
