import React, {FunctionComponent} from 'react';
import IconTooltip from "../IconTooltip";

type FormTooltipProps = {
    text: string | undefined;
};

const FormTooltip: FunctionComponent<FormTooltipProps> = ({text}) => {
    if (!text) return <></>;

    return (
        <IconTooltip icon={{name: "help"}} text={text} cssClass="form-tooltip"/>
    );
};

export default FormTooltip;
