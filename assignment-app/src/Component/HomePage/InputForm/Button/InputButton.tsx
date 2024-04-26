import { useContext } from "react";
import { HomePageContext } from "../../../../store/context";
import { buttonObjectArray } from "./buttonObject";
import ButtonStructure from "./ButtonStructure";

const MainInputButton: React.FC = () => {
    const { subMenu } = useContext(HomePageContext);

    const pageChecker = (subMenu: string): number => {
        return subMenu === "login" ? 0 : 1;
    };

    const buttonMapping: () => React.ReactElement[] = () => {
        return buttonObjectArray[pageChecker(subMenu)].map((data, key) => {
            return (
                <>
                    <ButtonStructure
                        key={key}
                        id={data.id}
                        type={data.type}
                        label={data.label}
                        style={data.style}
                    />
                </>
            );
        });
    };

    return <>{buttonMapping()}</>;
};

export default MainInputButton;
