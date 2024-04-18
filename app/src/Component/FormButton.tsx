import { useState } from "react";

const buttonStyle: string = "border-solid border border-black";

const FormButton = () => {
    return (
        <div>
            <button className={buttonStyle}>Previous</button>
            <input type="submit"></input>
        </div>
    );
};

export default FormButton;
