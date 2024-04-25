import { useField } from "formik";
import { LoginRegisterPage } from "./homePageObject";

const InputFormStructure: React.FC<LoginRegisterPage> = ({
    id,
    label,
    type,
    ...props
}) => {
    // const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <br />
            <input id={id} type={type}></input>
            <br />
        </>
    );
};

export default InputFormStructure;
