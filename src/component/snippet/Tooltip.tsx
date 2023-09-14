import React, {FunctionComponent, useRef, useState} from "react";
import clsx from "clsx";

type TooltipProps = {
    children: React.ReactNode;
    text: string;
    cssClass?: string;
    onClick?: (e: React.MouseEvent) => void;
};

const TOOLTIP_MARGIN_IN_PIXELS = 10;

const Tooltip: FunctionComponent<TooltipProps> = ({children, text, cssClass, onClick}) => {
    const [cssProperties, setCssProperties] = useState<React.CSSProperties>();
    const containerRef = useRef<HTMLSpanElement | null>(null);
    const tooltipRef = useRef<HTMLSpanElement | null>(null);

    const handleMouseOver = () => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        const tooltipRect = tooltipRef.current?.getBoundingClientRect();

        if (window.visualViewport && containerRect && tooltipRect) {
            let topValue = containerRect.bottom + TOOLTIP_MARGIN_IN_PIXELS;
            let leftValue = containerRect.left + (containerRect.width / 2) - (tooltipRect.width / 2);

            if (topValue + tooltipRect.height + TOOLTIP_MARGIN_IN_PIXELS >= window.visualViewport.height) {
                topValue = containerRect.top - tooltipRect.height - TOOLTIP_MARGIN_IN_PIXELS;
            }
            if (leftValue + tooltipRect.width + TOOLTIP_MARGIN_IN_PIXELS >= window.visualViewport.width) {
                leftValue = window.visualViewport.width - tooltipRect.width - TOOLTIP_MARGIN_IN_PIXELS;
            } else if (leftValue <= TOOLTIP_MARGIN_IN_PIXELS) {
                leftValue = TOOLTIP_MARGIN_IN_PIXELS;
            }

            setCssProperties({
                top: getValue(topValue),
                left: getValue(leftValue),
            });
        }
    };

    const getValue = (value: number | undefined) => {
        return value ? `${value}px` : "";
    };

    return (
        <span ref={containerRef} className={clsx("tooltip", {"tooltip--clickable": !!onClick})} onClick={onClick}>
            <span className={clsx("tooltip__content", cssClass)} onMouseOver={handleMouseOver}>
                {children}
            </span>
            <span ref={tooltipRef} className={clsx("tooltip__text")} style={cssProperties} dangerouslySetInnerHTML={{__html: text}}/>
        </span>
    );
};

export default Tooltip;
