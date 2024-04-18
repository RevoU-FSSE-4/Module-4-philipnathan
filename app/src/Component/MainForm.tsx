import { useState } from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import informationArray from "./InputObject";

const formContainerStyle: string = "flex flex-col justify-between";

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

    const informationMapping: () => React.ReactElement[] = () => {
        return informationArray[currentPage].map((data) => (
            <FormInput {...data} />
        ));
    };

    return (
        <section>
            <form action="" className={formContainerStyle}>
                <div>{informationMapping()}</div>
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
