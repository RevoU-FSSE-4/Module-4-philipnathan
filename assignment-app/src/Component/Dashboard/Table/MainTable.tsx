import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getAllCategory } from "./getAllCategory";
import { tableColumns } from "./tableColumns";

const MainTable: React.FC<{}> = () => {
    const columns = tableColumns;
    const [dataArray, setDataArray] = useState<DataArrayInterface[]>([]);

    interface DataArrayInterface {
        id: string;
        category_name: string;
        category_description: string;
        is_active: boolean;
    }

    useEffect(() => {
        data();
    }, [dataArray]);

    const data = async () => {
        try {
            const result = await getAllCategory();
            setDataArray(() => result);
        } catch (error) {
            console.log("Something Error in MainTable");
        }
    };

    return (
        <div>
            <DataGrid rows={dataArray} columns={columns} />
        </div>
    );
};

export default MainTable;
