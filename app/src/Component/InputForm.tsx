import { useState } from "react";
import { InputProperties } from "./InputObject";

const InputForm: React.FC<InputProperties> = (props) => {
    return (
        <>
            <p className={props.boxLabelStyle}>{props.label}</p>
            <input
                type={props.type}
                id={props.id}
                className={props.boxStyle}
                required
            ></input>
            <br></br>
        </>
    );
};

export default InputForm;
