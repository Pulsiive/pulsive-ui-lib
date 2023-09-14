import React, {FunctionComponent} from 'react';
import {useTranslation} from "react-i18next";
import ModalNew, {ModalNewProps} from "./ModalNew";
import {TranslationLibFile} from "../../utils/locale";
import ModalContent from "../snippet/modal/ModalContent";
import ModalHeader, {ModalHeaderAlignment, ModalHeaderDirection} from '../snippet/modal/ModalHeader';
import ModalStepper, {ModalStepperProps} from '../snippet/modal/ModalStepper';
import ModalHeaderTitle from '../snippet/modal/ModalHeaderTitle';
import ModalActions, {ModalActionsAlignment} from '../snippet/modal/ModalActions';

type ModalNewBlockHeaderProps = {
    alignment?: ModalHeaderAlignment;
    direction?: ModalHeaderDirection;
    stepper?: ModalStepperProps;
    title?: string;
};

type ModalNewBlockContentProps = {
    fullWidth?: boolean;
    centered?: boolean;
};

type ModalNewBlockFooterProps = {
    alignment?: ModalActionsAlignment;
    actions: React.ReactNode;
};

type ModalNewBlockProps = ModalNewProps & {
    header?: ModalNewBlockHeaderProps;
    content?: ModalNewBlockContentProps;
    footer?: ModalNewBlockFooterProps;
};

const ModalNewBlock: FunctionComponent<ModalNewBlockProps> = (props) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const {
        header,
        content,
        footer,
        children,
        ...rest
    } = props;

    return (
        <ModalNew {...rest}>
            {header &&
                <ModalHeader alignment={header.alignment} direction={header.direction}>
                    {header.stepper && <ModalStepper {...header.stepper}/>}
                    {header.title && <ModalHeaderTitle title={header.title}/>}
                </ModalHeader>
            }
            <ModalContent {...content}>
                {children}
            </ModalContent>
            {footer &&
                <ModalActions alignment={footer.alignment}>
                    {footer.actions}
                </ModalActions>
            }
        </ModalNew>
    )
};

export default ModalNewBlock
