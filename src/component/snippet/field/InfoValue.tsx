import React, {FunctionComponent} from 'react';

type InfoValueProps = {
    value: string | number;
};

const InfoValue: FunctionComponent<InfoValueProps> = ({value}) => {
    return (
        <div className="info-value">{value}</div>
    );
};

export default InfoValue;
