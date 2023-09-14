import React, {FunctionComponent} from "react";
import clsx from "clsx";

export enum ParagraphAlignment {
    JUSTIFY = "paragraph--align-justify",
    CENTER = "paragraph--align-center"
}

type ParagraphProps = {
    children: React.ReactNode;
    alignment?: ParagraphAlignment;
    withSpacing?: boolean;
    cssClass?: string;
};

const Paragraph: FunctionComponent<ParagraphProps> = ({children, alignment, withSpacing, cssClass}) => {
    return (
        <p className={clsx("paragraph", alignment, {"paragraph--with-spacing": withSpacing}, cssClass)}>
            {children}
        </p>
    );
};

export default Paragraph;
