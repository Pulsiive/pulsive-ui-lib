import React, {FunctionComponent} from 'react';

export type FormButtonsProps = {
    children: React.ReactNode;
};

const FormButtons: FunctionComponent<FormButtonsProps> = ({children}) => {
    return (
        <div className="form-buttons">
            {children}
        </div>
    )
};

export default FormButtons;
