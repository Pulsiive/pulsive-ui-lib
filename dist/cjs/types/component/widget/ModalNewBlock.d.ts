import React, { FunctionComponent } from 'react';
import { ModalNewProps } from "./ModalNew";
import { ModalHeaderAlignment, ModalHeaderDirection } from '../snippet/modal/ModalHeader';
import { ModalStepperProps } from '../snippet/modal/ModalStepper';
import { ModalActionsAlignment } from '../snippet/modal/ModalActions';
declare type ModalNewBlockHeaderProps = {
    alignment?: ModalHeaderAlignment;
    direction?: ModalHeaderDirection;
    stepper?: ModalStepperProps;
    title?: string;
};
declare type ModalNewBlockContentProps = {
    fullWidth?: boolean;
    centered?: boolean;
};
declare type ModalNewBlockFooterProps = {
    alignment?: ModalActionsAlignment;
    actions: React.ReactNode;
};
declare type ModalNewBlockProps = ModalNewProps & {
    header?: ModalNewBlockHeaderProps;
    content?: ModalNewBlockContentProps;
    footer?: ModalNewBlockFooterProps;
};
declare const ModalNewBlock: FunctionComponent<ModalNewBlockProps>;
export default ModalNewBlock;
