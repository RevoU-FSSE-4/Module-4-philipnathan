interface FormButtonProps {
    onNext: () => void;
    onPrevious: () => void;
    pageNumber: number;
    isNotFilled: boolean;
}

const buttonStyle: string =
    "text-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-24";
const nextButtonStyle: string =
    "text-black bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-24";
const falseNextButtonStyle: string =
    "text-black bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-24";

const FormButton: React.FC<FormButtonProps> = ({
    onNext,
    onPrevious,
    pageNumber,
    isNotFilled,
}) => {
    const buttonText: string[] = ["Next", "Next", "Submit"];
    const buttonType: ("button" | "submit")[] = ["button", "button", "submit"];

    return (
        <>
            <button className={buttonStyle} onClick={onPrevious} type="button">
                Previous
            </button>
            <button
                className={isNotFilled ? falseNextButtonStyle : nextButtonStyle}
                onClick={onNext}
                type={buttonType[pageNumber]}
                disabled={isNotFilled}
            >
                {buttonText[pageNumber]}
            </button>
        </>
    );
};

export default FormButton;
