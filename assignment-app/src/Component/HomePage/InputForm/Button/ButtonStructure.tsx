import { useContext } from "react";
import { ButtonObjectInterface } from "./buttonObject";
import { HomePageContext } from "../../../../store/context";
import { useFormikContext } from "formik";
import { registerFetch } from "../Form/FormFetching/registerFetch";
import { loginFetch } from "../Form/FormFetching/loginFetch";
import { useNavigate } from "react-router-dom";

const ButtonStructure: React.FC<ButtonObjectInterface> = ({ ...props }) => {
    const { id, type, label, style } = props;
    const navigate = useNavigate();

    const { setSubMenu } = useContext(HomePageContext);

    const { values } = useFormikContext<any>();
    const {
        loginEmail,
        loginPassword,
        username,
        registerEmail,
        registerPassword,
    } = values;

    const onClick = async (id: string) => {
        switch (id) {
            case "submitRegisterButton":
                if (
                    await registerFetch(
                        username,
                        registerEmail,
                        registerPassword
                    )
                ) {
                    setSubMenu(() => "login");
                }
                break;
            case "inputLoginButton":
                await loginFetch(loginEmail, loginPassword);
                if (localStorage.getItem("token")) {
                    navigate("/dashboard");
                }
                break;
            case "registerButton":
                setSubMenu(() => "register");
                break;
            case "loginButton":
                setSubMenu(() => "login");
                break;
            default:
                setSubMenu(() => "login");
                break;
        }
    };

    return (
        <>
            <button
                id={id}
                type={type}
                className={style}
                onClick={() => onClick(id)}
            >
                {label}
            </button>{" "}
        </>
    );
};

export default ButtonStructure;
