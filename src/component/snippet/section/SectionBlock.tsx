import React, {FunctionComponent} from 'react';
import SectionBlockHeader, {SectionBlockHeaderProps} from "./SectionBlockHeader";
import SectionBlockFooter, {SectionBlockFooterProps} from "./SectionBlockFooter";
import Box, {BoxProps, BoxSpacing} from "../Box";
import clsx from "clsx";

type SectionBlockProps = {
    children: React.ReactNode;
    cssClass?: string;
    box?: BoxProps;
    header?: SectionBlockHeaderProps;
    footer?: SectionBlockFooterProps;
};

const SectionBlock: FunctionComponent<SectionBlockProps> = ({box, header, children, cssClass, footer}) => {
    return (
        <div className={clsx("section-block", cssClass)}>
            {header && <SectionBlockHeader {...header}/>}
            <Box {...box} cssClass={clsx("section-block__box", box?.cssClass)} spacing={box?.spacing || BoxSpacing.LARGE}>
                {children}
            </Box>
            {footer && <SectionBlockFooter {...footer}/>}
        </div>
    )
};

export default SectionBlock;
