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
            <input
                className={buttonStyle}
                onClick={onNext}
                type="submit"
            ></input>
        </div>
    );
};

export default FormButton;
