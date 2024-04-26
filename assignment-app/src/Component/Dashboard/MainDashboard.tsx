import Navbar from "./Navbar/NavBar";
import MainTable from "./Table/MainTable";
import AddData from "./tableAddData/AddData";

const MainDashboard: React.FC<{}> = () => {
    return (
        <>
            <Navbar />
            <MainTable />
            <AddData />
        </>
    );
};

export default MainDashboard;
