interface FormButtonProps {
    onNext: () => void;
    onPrevious: () => void;
}

const buttonStyle: string = "border-solid border border-black";

const FormButton: React.FC<FormButtonProps> = ({ onNext, onPrevious }) => {
    return (
        <div>
            <button className={buttonStyle} onClick={onPrevious}>
                Previous
            </button>
            <button className={buttonStyle} onClick={onNext}>
                Next
            </button>
        </div>
    );
};

export default FormButton;
