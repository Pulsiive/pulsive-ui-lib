import { FunctionComponent } from 'react';
export declare enum ModalStepperAlignment {
    LEFT = "modal-title-stepper--align-left"
}
export declare type ModalStepperProps = {
    steps: number;
    activeStep: number;
    alignment?: ModalStepperAlignment;
};
declare const ModalStepper: FunctionComponent<ModalStepperProps>;
export default ModalStepper;
