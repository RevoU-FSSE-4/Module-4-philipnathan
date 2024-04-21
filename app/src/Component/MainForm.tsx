import { useState } from "react";
import { Formik, Form, FormikProps } from "formik";
import FormButton from "./ButtonComponents/FormButton";
import FormInputMaker from "./FormInputComponents/FormInputMaker";
import { MainFormInterface } from "./MainFormComponents/MainFormInterface";
import StepperComponent from "./Stepper";
import { validationSchema } from "./MainFormComponents/MainFormValidation";
import {
    formContainerStyle,
    inputContainerStyle,
    buttonContainerStyle,
    stepperStyle,
    sectionMainFormStyle,
    formStyle,
} from "./MainFormComponents/MainFormStyle";
import { mainFormInitialValues } from "./MainFormComponents/MainFormInitialValue";

const MainForm: React.FC<{}> = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const handleNext = () => {
        if (currentPage === 2) {
            return;
        }
        setCurrentPage(currentPage + 1);
    };
    const handlePrevious = (): void => {
        if (currentPage === 0) {
            return;
        }
        setCurrentPage(currentPage - 1);
    };

    const handleReset = (values: MainFormInterface, action: any) => {
        action.resetForm();
        setCurrentPage(0);
    };

    return (
        <section className={sectionMainFormStyle}>
            <Formik
                initialValues={mainFormInitialValues}
                onSubmit={handleReset}
                validationSchema={validationSchema}
            >
                {(formikProps: FormikProps<MainFormInterface>) => (
                    <div className={formContainerStyle}>
                        <Form autoComplete="off" className={formStyle}>
                            <div className={stepperStyle}>
                                <StepperComponent pageNumber={currentPage} />
                            </div>
                            <div className={inputContainerStyle}>
                                <FormInputMaker currentPage={currentPage} />
                            </div>
                            <div className={buttonContainerStyle}>
                                <FormButton
                                    onNext={handleNext}
                                    onPrevious={handlePrevious}
                                    pageNumber={currentPage}
                                    meta={formikProps}
                                />
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </section>
    );
};

export default MainForm;
