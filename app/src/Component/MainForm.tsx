import { useState } from "react";
import FormButton from "./FormButton";
import FormInputMaker from "./FormInputMaker";
import { InputValueContainer } from "./MainFormInterface";
import {
    isPageOneNotFilled,
    isPageTwoNotFilled,
    isPageThreeNotFilled,
} from "./FormValidation";

const formContainerStyle: string = "flex flex-col justify-between w-52";
const inputContainerStyle: string = "flex flex-col justify-center";
const buttonContainerStyle: string = "flex justify-between mt-4 mb-4";

const MainForm = () => {
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

    const [currentValue, setCurrentValue] = useState<InputValueContainer>({
        fullName: "",
        email: "",
        birth: new Date(0),
        street: "",
        city: "",
        state: "",
        zip: "",
        username: "",
        password: "",
    });

    const handleChangeValue = (inputId: string, inputValue: string) => {
        setCurrentValue((value) => {
            return { ...value, [inputId]: inputValue };
        });
    };

    const formChecker = (
        value = currentValue,
        pageNumber = currentPage
    ): boolean => {
        switch (pageNumber) {
            case 0:
                return isPageOneNotFilled(value);
            case 1:
                return isPageTwoNotFilled(value);
            case 2:
                return isPageThreeNotFilled(value);
            default:
                return true;
        }
    };

    return (
        <section>
            <form action="" className={formContainerStyle}>
                <div className={inputContainerStyle}>
                    <FormInputMaker
                        currentPage={currentPage}
                        currentValue={currentValue}
                        setCurrentValue={handleChangeValue}
                    />
                </div>
                <div className={buttonContainerStyle}>
                    <FormButton
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                        pageNumber={currentPage}
                        isNotFilled={formChecker()}
                    />
                </div>
            </form>
        </section>
    );
};

export default MainForm;
