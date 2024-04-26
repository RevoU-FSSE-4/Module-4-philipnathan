import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import EditDeleteButton from "./EditDeleteButton";

export const tableColumns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
        field: "category_name",
        headerName: "Title",
        sortable: true,
        editable: true,
        flex: 1,
    },
    {
        field: "category_description",
        headerName: "Description",
        editable: true,
        flex: 1,
    },
    {
        field: "edit",
        headerName: "Delete",
        flex: 1,
        renderCell: (params: GridRenderCellParams) => (
            <EditDeleteButton {...params} param={params.row} />
        ),
    },
];
