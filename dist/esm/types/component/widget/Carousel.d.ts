import React, { FunctionComponent } from "react";
import { Options } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
declare type CarouselProps = {
    ariaLabel: string;
    slides: React.ReactNode[];
    cssClass?: string;
    isLoading?: boolean;
    splideOptions?: Options;
};
declare const Carousel: FunctionComponent<CarouselProps>;
export default Carousel;
