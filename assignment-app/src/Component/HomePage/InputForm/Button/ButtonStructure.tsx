import { ButtonObjectInterface } from "./buttonObject";

const ButtonStructure: React.FC<ButtonObjectInterface> = ({ ...props }) => {
    const { id, type, label, style } = props;
    return (
        <>
            <button id={id} type={type} className={style}>
                {label}
            </button>
        </>
    );
};

export default ButtonStructure;
