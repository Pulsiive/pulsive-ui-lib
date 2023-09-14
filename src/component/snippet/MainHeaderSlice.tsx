import React, {FunctionComponent} from 'react';

type MainHeaderSliceProps = {
    children: React.ReactNode;
}

const MainHeaderSlice: FunctionComponent<MainHeaderSliceProps> = ({children}) => {
    return (
        <div className="main-header__content__slice">
            {children}
        </div>
    );
}

export default MainHeaderSlice;
