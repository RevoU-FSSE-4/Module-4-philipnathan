import { FormikProps } from "formik";
import { buttonStyle, nextButtonStyle } from "./FormButtonStyle";
import { MainFormInterface } from "../MainFormComponents/MainFormInterface";
import { formButtonValidation } from "./formButtonValidation";

interface FormButtonProps {
    onNext: () => void;
    onPrevious: () => void;
    pageNumber: number;
    meta: FormikProps<MainFormInterface>;
}

const FormButton: React.FC<FormButtonProps> = ({
    onNext,
    onPrevious,
    pageNumber,
    meta,
}) => {
    const buttonText: string[] = ["Next", "Next", "Submit"];
    const buttonType: ("button" | "submit")[] = ["button", "button", "submit"];

    return (
        <>
            <button className={buttonStyle} onClick={onPrevious} type="button">
                Previous
            </button>
            <button
                className={nextButtonStyle}
                onClick={onNext}
                type={buttonType[pageNumber]}
                disabled={formButtonValidation(meta, pageNumber)}
            >
                {buttonText[pageNumber]}
            </button>
        </>
    );
};

export default FormButton;
