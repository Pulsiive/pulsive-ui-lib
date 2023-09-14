import React, {FunctionComponent} from "react";

type EmptyContentMessageProps = {
    svg: React.FunctionComponent;
    message: string;
    children?: React.ReactNode;
};

const EmptyContentMessage: FunctionComponent<EmptyContentMessageProps> = ({
    svg,
    message,
    children,
}) => {
    return (
        <section className="content-message">
            {React.createElement(svg)}
            <p dangerouslySetInnerHTML={{__html: message}} />
            {children}
        </section>
    );
};

export default EmptyContentMessage;
