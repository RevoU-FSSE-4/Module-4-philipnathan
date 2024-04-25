import { HomePageContext } from "../../store/context";
import SubMenuButton from "./SubMenuButton/SubMenuButton";
import { useState } from "react";
import MainInputForm from "./InputForm/MainInputForm";

const mainHomePageContainerStyle: string =
    "flex flex-row h-screen justify-center align-center";
const mainHomePageStyle: string =
    "flex flex-col justify-between w-80 h-80 border self-center border-solid border-gray-900 rounded bg-gray-500";

//absolute inset-0 m-auto w-80 h-80 flex items-center justify-center

const MainHomePage: React.FC<{}> = () => {
    const [subMenu, setSubMenu] = useState<string>("");

    return (
        <div className={mainHomePageContainerStyle}>
            <div className={mainHomePageStyle}>
                <HomePageContext.Provider
                    value={{ subMenu: subMenu, setSubMenu: setSubMenu }}
                >
                    <SubMenuButton />
                    <MainInputForm />
                </HomePageContext.Provider>
            </div>
        </div>
    );
};

export default MainHomePage;
