import React, {FunctionComponent} from "react";

type ModalHeaderTitleProps = {
    title: string;
};

const ModalHeaderTitle: FunctionComponent<ModalHeaderTitleProps> = ({title}) => {
    return (
        <span
            className="modal-new__container__header__title"
            dangerouslySetInnerHTML={{__html: title}}
        />
    );
};

export default ModalHeaderTitle;
