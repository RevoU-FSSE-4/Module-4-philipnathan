import { Field, useField } from "formik";
import { InputProperties } from "./InputObject";

interface FormInputProps {
    label: string;
    data: InputProperties;
    name: string;
    type: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, data, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={data.id} className={data.boxLabelStyle}>
                {label}
            </label>
            <Field {...field} {...props} className={data.boxStyle}></Field>
            {meta.touched && meta.error && <div>{meta.error}</div>}
        </>
    );
};

export default FormInput;
