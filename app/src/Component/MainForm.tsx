import { ReactElement, ReactNode } from "react";
import FormButton from "./FormButton";
import InputForm from "./InputForm";
import informationArray from "./InputObject";

const formContainerStyle: string = "flex flex-col justify-between";

const MainForm = () => {
    // const informationMapping = (): ReactNode => {
    //     informationArray[0].map((data) => <InputForm {...data} />);
    // };

    return (
        <section>
            <form action="" className={formContainerStyle}>
                <div>
                    {informationArray[0].map((data) => (
                        <InputForm {...data} />
                    ))}
                </div>
                <div>
                    <FormButton />
                </div>
            </form>
        </section>
    );
};

export default MainForm;
