import React, {FunctionComponent} from 'react';
import FormTooltip from "./FormTooltip";

type FormFieldTitleProps = {
    label?: string;
    name?: string;
    required?: boolean;
    tooltip?: string;
    actions?: React.ReactNode | React.ReactNode[];
};

const FormFieldTitle: FunctionComponent<FormFieldTitleProps> = ({label, name, tooltip, required, actions}) => {
    const actionList = actions && (Array.isArray(actions) ? actions : [actions]);

    return (
        <div className="form-field-title">
            <label htmlFor={name}>{label}{required && ' *'}<FormTooltip text={tooltip}/></label>
            {actionList &&
            <div className="form-field-title-actions">
                {actionList.map((action, index) =>
                    <React.Fragment key={index}>
                        {action}
                    </React.Fragment>
                )}
            </div>
            }
        </div>
    )
};

export default FormFieldTitle;
