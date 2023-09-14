import React, {FunctionComponent, useState} from "react";
import ModalNew from "./ModalNew";
import {
    Button,
    Loader,
    ModalActions,
    ModalActionsAlignment,
    ModalContent,
    ModalHeader,
    ModalHeaderTitle,
} from "../snippet";

export type ModalNotificationContent = {
    image: string;
    call_to_action: string;
    title?: string;
    subtitle?: string;
    text?: string;
}

type ModalNotificationProps = {
    content: ModalNotificationContent;
    active: boolean;
    onClose: (e: React.MouseEvent) => void;
    onCallToAction: (e: React.MouseEvent) => void;
    subLink: {
        onClick: (e: React.MouseEvent) => void;
        label: string;
    };
};

const ModalNotification: FunctionComponent<ModalNotificationProps> = ({content, active, onClose, onCallToAction, subLink}) => {
    const [isImageLoading, setImageLoading] = useState(true);

    const hasText = content?.text || content?.subtitle;

    return (
        <ModalNew active={active} onClose={onClose} loading={false} subLink={subLink} cssClass="modal-notification">
            <ModalHeader>
                {content?.title && <ModalHeaderTitle title={content.title} /> }
            </ModalHeader>
            <ModalContent fullWidth>
                <img
                    src={content.image}
                    className="modal-notification__image"
                    alt="modal-notification"
                    onLoad={() => setImageLoading(false)}
                    style={{ display: isImageLoading ? 'none' : 'block' }}
                />
                {isImageLoading && <Loader cssClass="modal-notification__image" small />}
            </ModalContent>
            <ModalActions alignment={hasText ? ModalActionsAlignment.SPACE_BETWEEN : ModalActionsAlignment.CENTER}>
                {hasText &&
                    <div className="modal-notification__actions">
                        {content?.subtitle &&
                            <span className="modal-notification__actions__subtitle">
                                {content.subtitle}
                            </span>
                        }
                        {content?.text &&
                            <span>
                                {content.text}
                            </span>
                        }
                    </div>
                }
                {content?.call_to_action && <Button onClick={onCallToAction}>{content.call_to_action}</Button>}
            </ModalActions>
        </ModalNew>
    );
};

export default ModalNotification;
