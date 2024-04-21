import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

interface StepperInterface {
    pageNumber: number;
}

const StepperComponent: React.FC<StepperInterface> = ({ pageNumber }) => {
    return (
        <Stepper activeStep={pageNumber}>
            <Step>
                <StepLabel>Personal Information</StepLabel>
            </Step>
            <Step>
                <StepLabel>Adress Information</StepLabel>
            </Step>
            <Step>
                <StepLabel>Account Sign Up</StepLabel>
            </Step>
        </Stepper>
    );
};

export default StepperComponent;
