import { useEffect, useState } from "react";
import { getUserProfile } from "./getUserProfile";
import { handleLogOut } from "./handleLogOut";
import { useNavigate } from "react-router-dom";

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
        <section>
            <h2>Hi, {username}</h2>
            <button onClick={onClick}>Logout</button>
        </section>
    );
};

export default Navbar;
