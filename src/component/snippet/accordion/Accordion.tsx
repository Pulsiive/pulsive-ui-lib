import React from "react";
import clsx from "clsx";
import Box, { BoxRadius, BoxSpacing } from "../Box";

type AccordionProps = {
    children: React.ReactNode;
    cssClass?: string;
}

const Accordion: React.FunctionComponent<AccordionProps> = ({children, cssClass}) => {
    if (!children) return null;

    return (
        <Box spacing={BoxSpacing.NONE} radius={BoxRadius.MD} cssClass={clsx("accordion", cssClass)}>
            {children}
        </Box>
    );
};

export default Accordion;
