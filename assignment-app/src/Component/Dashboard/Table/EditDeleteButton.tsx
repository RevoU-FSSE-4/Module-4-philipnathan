import React from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { deleteButtonFunction } from "./deleteButtonFunction";

interface EditButtonInterface extends GridRenderCellParams {
    param: () => {};
}

const EditDeleteButton: React.FC<EditButtonInterface> = (param) => {
    const onClickDelete = async (id: string) => {
        try {
            await deleteButtonFunction(id);
        } catch (error) {
            console.log("Something error in EditDeleteButton");
        }
    };

    return (
        <>
            <button onClick={() => onClickDelete(param.id.toString())}>
                Delete
            </button>
        </>
    );
};

export default EditDeleteButton;
