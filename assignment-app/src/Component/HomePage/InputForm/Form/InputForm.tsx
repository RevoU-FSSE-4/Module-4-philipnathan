import React, { useContext } from "react";
import { HomePageContext } from "../../../../store/context";
import { homePageObject } from "./homePageObject";
import InputFormStructure from "./FormStructure";

const InputForm: React.FC<{}> = () => {
    const { subMenu } = useContext(HomePageContext);

    const pageChecker = (subMenu: string): number => {
        return subMenu === "login" ? 0 : 1;
    };

    const homePageObjectMapping: () => React.ReactElement[] = () => {
        return homePageObject[pageChecker(subMenu)].map((data, index) => {
            return (
                <>
                    <InputFormStructure
                        key={index}
                        id={data.id}
                        label={data.label}
                        type={data.type}
                    />
                </>
            );
        });
    };

    return <>{homePageObjectMapping()}</>;
};

export default InputForm;
