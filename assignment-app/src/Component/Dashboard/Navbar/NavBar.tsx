import { useEffect, useState } from "react";
import { getUserProfile } from "./getUserProfile";
import { handleLogOut } from "./handleLogOut";
import { useNavigate } from "react-router-dom";

const navbarStyle: string =
    "flex flex-row justify-end gap-4 p-4 bg-cyan-800 text-white";

const Navbar: React.FC<{}> = () => {
    const [username, setUserName] = useState<string>("");
    const navigate = useNavigate();

    const data = async () => {
        try {
            const result = await getUserProfile();
            setUserName(() => result.name);
        } catch (error) {
            console.log("something Error in NavBar");
        }
    };

    useEffect(() => {
        data();
    }, []);

    const onClick = async () => {
        await handleLogOut();
        navigate("/");
    };

    return (
        <section className={navbarStyle}>
            <h2>Hi, {username}</h2>
            <button onClick={onClick}>Logout</button>
        </section>
    );
};

export default Navbar;
