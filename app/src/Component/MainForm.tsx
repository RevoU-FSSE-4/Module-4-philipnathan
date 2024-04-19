import { useState } from "react";
import FormButton from "./FormButton";
import FormInputMaker from "./FormInputMaker";
import { InputValueContainer } from "./MainFormInterface";

// const formContainerStyle: string = "flex flex-col justify-between";

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
        date: new Date(),
        street: "",
        city: "",
        state: "",
        zip: 0,
        username: "",
        password: "",
    });

    const handleChangeValue = (inputId: string, inputValue: string) => {
        setCurrentValue((value) => {
            return { ...value, [inputId]: inputValue };
        });
    };

    return (
        <section>
            <form action="">
                <div>
                    <FormInputMaker
                        currentPage={currentPage}
                        currentValue={currentValue}
                        setCurrentValue={handleChangeValue}
                    />
                </div>
                <div>
                    <FormButton
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                </div>
            </form>
        </section>
    );
};

export default MainForm;
