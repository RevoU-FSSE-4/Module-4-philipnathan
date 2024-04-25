import MainInputButton from "./Button/InputButton";
import InputForm from "./Form/InputForm";
import { Formik, FormikProps, Form } from "formik";
import { InitialValue, initialValue } from "./MainInputFormInterface";

const inputButtonStyle: string = "flex flex-row justify-end gap-4 p-4 mt-4";

const MainInputForm: React.FC<{}> = () => {
    const onSubmit = (values: any, action: any) => {
        action.resetForm();
    };

    return (
        <Formik initialValues={initialValue} onSubmit={onSubmit}>
            {(formikPropsValue: FormikProps<InitialValue>) => (
                <Form autoComplete="off">
                    <div>
                        <InputForm />
                    </div>
                    <div className={inputButtonStyle}>
                        <MainInputButton />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default MainInputForm;
