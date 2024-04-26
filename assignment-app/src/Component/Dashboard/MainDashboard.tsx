import { EditActiveContext } from "../../store/context";
import Navbar from "./Navbar/NavBar";
import MainTable from "./Table/MainTable";
import AddData from "./tableAddData/AddData";
import { useState } from "react";

const MainDashboard: React.FC<{}> = () => {
    const [isEditActive, setIsEditActive] = useState<boolean>(false);

    return (
        <EditActiveContext.Provider
            value={{
                isEditActive: isEditActive,
                setIsEditActive: setIsEditActive,
            }}
        >
            <Navbar />
            <MainTable />
            <AddData />
        </EditActiveContext.Provider>
    );
};

export default MainDashboard;
