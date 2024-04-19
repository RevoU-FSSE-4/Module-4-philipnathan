import FormInput from "./FormInput";
import informationArray from "./InputObject";

interface FormInputMakerProps {
    currentPage: number;
    currentValue: {};
    setCurrentValue: (inputId: string, inputValue: string) => void;
}

const FormInputMaker: React.FC<FormInputMakerProps> = ({
    currentPage,
    currentValue,
    setCurrentValue,
}) => {
    const informationMapping: () => React.ReactElement[] = () => {
        return informationArray[currentPage].map((data, index) => (
            <FormInput
                key={index}
                currentValue={currentValue}
                setCurrentValue={setCurrentValue}
                data={data}
            />
        ));
    };

    return <>{informationMapping()}</>;
};

export default FormInputMaker;
