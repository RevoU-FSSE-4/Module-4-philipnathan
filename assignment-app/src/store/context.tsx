import { createContext } from "react";
import { FormikProps } from "formik";

export interface HomePageContextInterface {
    subMenu: string;
    setSubMenu: React.Dispatch<React.SetStateAction<string>>;
}

export const HomePageContext = createContext<HomePageContextInterface>({
    subMenu: "",
    setSubMenu: () => ({}),
});
