import React, { FunctionComponent } from "react";
export declare enum ParagraphAlignment {
    JUSTIFY = "paragraph--align-justify",
    CENTER = "paragraph--align-center"
}
declare type ParagraphProps = {
    children: React.ReactNode;
    alignment?: ParagraphAlignment;
    withSpacing?: boolean;
    cssClass?: string;
};
declare const Paragraph: FunctionComponent<ParagraphProps>;
export default Paragraph;
