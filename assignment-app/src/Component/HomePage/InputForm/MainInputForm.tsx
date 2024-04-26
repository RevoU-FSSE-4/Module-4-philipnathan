import MainInputButton from "./Button/InputButton";
import InputForm from "./Form/InputForm";
import { Formik, Form } from "formik";
import { initialValue } from "./MainInputFormInterface";
// import { FormikPropsContext } from "../../../store/context";

const inputButtonStyle: string = "flex flex-row justify-end";
const inputFormStyle: string = "h-full self-center content-center";
const inputContainerStyle: string = "h-full flex flex-col justify-between";

const MainInputForm: React.FC<{}> = () => {
    const onSubmit = (values: any, action: any) => {
        action.resetForm();
    };

    return (
        <Formik initialValues={initialValue} onSubmit={onSubmit}>
            <Form autoComplete="off" className={inputContainerStyle}>
                <div className={inputFormStyle}>
                    <InputForm />
                </div>
                <div className={inputButtonStyle}>
                    <MainInputButton />
                </div>
            </Form>
        </Formik>
    );
};

export default MainInputForm;
