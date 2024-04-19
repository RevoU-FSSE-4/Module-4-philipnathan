import { InputProperties } from "./InputObject";

interface FormInputProps {
    currentValue: { [key: string]: any };
    setCurrentValue: (inputId: string, inputValue: string) => void;
    data: InputProperties;
}

const FormInput: React.FC<FormInputProps> = ({
    currentValue,
    setCurrentValue,
    data,
}) => {
    return (
        <>
            <p className={data.boxLabelStyle}>{data.label}</p>
            <input
                value={currentValue[data.id] || ""}
                onChange={(event) =>
                    setCurrentValue(data.id, event.target.value)
                }
                type={data.type}
                id={data.id}
                className={data.boxStyle}
                required
            ></input>
        </>
    );
};

export default FormInput;
