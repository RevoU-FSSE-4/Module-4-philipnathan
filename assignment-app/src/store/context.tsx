import { createContext } from "react";

interface HomePageContextInterface {
    subMenu: string;
    setSubMenu: React.Dispatch<React.SetStateAction<string>>;
}

export const HomePageContext = createContext<HomePageContextInterface>({
    subMenu: "",
    setSubMenu: () => ({}),
});
