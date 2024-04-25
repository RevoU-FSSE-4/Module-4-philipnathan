import { useContext } from "react";
import { HomePageContext } from "../../../store/context";

const subMenuButtonStyle: string = "flex flex-row justify-around p-4 m-0";

const SubMenuButton: React.FC<{}> = () => {
    const { setSubMenu } = useContext(HomePageContext);

    const loginOnClick = () => {
        setSubMenu(() => "login");
    };

    const registerOnClick = () => {
        setSubMenu(() => "register");
    };

    return (
        <>
            <div className={subMenuButtonStyle}>
                <button type="button" onClick={loginOnClick}>
                    Login
                </button>
                <button type="button" onClick={registerOnClick}>
                    Register
                </button>
            </div>
        </>
    );
};

export default SubMenuButton;
