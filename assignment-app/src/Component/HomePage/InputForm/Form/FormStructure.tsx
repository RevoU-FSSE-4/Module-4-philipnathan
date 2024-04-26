import { useFormikContext } from "formik";
// import { FormikPropsContext } from "../../../../store/context";
import { LoginRegisterPage } from "./homePageObject";

const InputFormStructure: React.FC<LoginRegisterPage> = ({
    id,
    label,
    type,
}) => {
    const { values, handleChange } = useFormikContext<any>();

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <br />
            <input
                id={id}
                type={type}
                onChange={handleChange}
                value={values[id]}
            ></input>
            <br />
        </>
    );
};

export default InputFormStructure;
