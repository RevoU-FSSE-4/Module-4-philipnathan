import { createContext } from "react";

interface HomePageContextInterface {
    subMenu: string;
    setSubMenu: React.Dispatch<React.SetStateAction<string>>;
}

export const HomePageContext = createContext<HomePageContextInterface>({
    subMenu: "",
    setSubMenu: () => ({}),
});

interface EditActiveInterface {
    isEditActive: boolean;
    setIsEditActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditActiveContext = createContext<EditActiveInterface>({
    isEditActive: false,
    setIsEditActive: () => ({}),
});
