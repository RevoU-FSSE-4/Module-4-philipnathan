import FormInput from "./FormInput";
import informationArray from "./InputObject";

interface FormInputMakerProps {
    currentPage: number;
}

const FormInputMaker: React.FC<FormInputMakerProps> = ({ currentPage }) => {
    const informationMapping: () => React.ReactElement[] = () => {
        return informationArray[currentPage].map((data, index) => (
            <FormInput
                key={index}
                label={data.label}
                data={data}
                name={data.id}
                type={data.type}
            />
        ));
    };

    return <>{informationMapping()}</>;
};

export default FormInputMaker;
