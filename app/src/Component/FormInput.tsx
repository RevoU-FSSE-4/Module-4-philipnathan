import React, { useState } from "react";
import { InputProperties } from "./InputObject";

interface Value {
    [key: string]: string;
}

const FormInput: React.FC<InputProperties> = (props) => {
    const [currentValue, setCurrentValue] = useState<Value>({});

    const handleChangeValue = (inputId: string, inputValue: string) => {
        setCurrentValue((value) => {
            console.log(currentValue);
            return { ...value, [inputId]: inputValue };
        });
    };

    return (
        <>
            <p className={props.boxLabelStyle}>{props.label}</p>
            <input
                value={currentValue[props.id]}
                onChange={(e) => handleChangeValue(props.id, e.target.value)}
                type={props.type}
                id={props.id}
                className={props.boxStyle}
                required
            ></input>
            <br></br>
        </>
    );
};

export default FormInput;
