import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import EditDeleteButton from "./EditDeleteButton";

export const tableColumns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
        field: "category_name",
        headerName: "Title",
        sortable: true,
        flex: 1,
    },
    {
        field: "category_description",
        headerName: "Description",
        flex: 1,
    },
    {
        field: "edit",
        headerName: "Edit",
        flex: 1,
        renderCell: (params: GridRenderCellParams) => (
            <EditDeleteButton {...params} param={params.row} />
        ),
    },
];
