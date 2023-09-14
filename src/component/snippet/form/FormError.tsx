import React, {FunctionComponent} from 'react';

type FormErrorProps = {
    message: string;
};

const FormError: FunctionComponent<FormErrorProps> = ({ message}) => {
    return (
        <div className="form-error">{message}</div>
    );
};

export default FormError;
