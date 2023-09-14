import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export enum ModalStepperAlignment {
    LEFT = "modal-title-stepper--align-left"
}

export type ModalStepperProps = {
    steps: number;
    activeStep: number;
    alignment?: ModalStepperAlignment;
};

const ModalStepper: FunctionComponent<ModalStepperProps> = ({ alignment, activeStep, steps }) => {
    const buildSteps = () => {
        let jsx = [];
        for (let i = 0; i < steps; i++) {
            jsx.push(<span key={`step-${i}`} className={clsx({"active": i === activeStep})}>{i + 1}</span>)
        }
        return jsx;
    }

    return (
        <div className={clsx("modal-title-stepper", alignment)}>
            {buildSteps()}
        </div>
    )
};

export default ModalStepper;
