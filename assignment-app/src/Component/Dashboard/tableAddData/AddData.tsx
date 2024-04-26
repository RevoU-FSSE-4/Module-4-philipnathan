import { useState } from "react";
import { postNewData } from "./postNewData";

const AddData: React.FC<{}> = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const titleOnChange = (event: string) => {
        setTitle(() => event);
    };

    const descriptionOnChange = (event: string) => {
        setDescription(() => event);
    };

    const onClick = () => {
        postNewData(title, description);
        setTitle(() => "");
        setDescription(() => "");
    };

    return (
        <>
            <label>Title</label>
            <input
                id="category_name"
                type="text"
                className="border border-black"
                value={title}
                onChange={(event) => titleOnChange(event.target.value)}
            />
            <label>Description</label>
            <input
                id="category_description "
                type="text"
                className="border border-black"
                value={description}
                onChange={(event) => descriptionOnChange(event.target.value)}
            />
            <button type="submit" onClick={onClick}>
                Submit
            </button>
        </>
    );
};

export default AddData;
