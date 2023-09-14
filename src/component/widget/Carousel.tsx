import React, {FunctionComponent, useEffect, useState} from "react";
import clsx from "clsx";
import {Splide, SplideSlide, SplideTrack, Options} from "@splidejs/react-splide";
import Icon from "../snippet/Icon";
import Loader from "../snippet/Loader";

import "@splidejs/react-splide/css";

type CarouselProps = {
    ariaLabel: string;
    slides: React.ReactNode[];
    cssClass?: string,
    isLoading?: boolean;
    splideOptions?: Options;
};

const Carousel: FunctionComponent<CarouselProps> = ({ariaLabel, slides, isLoading, cssClass, splideOptions = {}}) => {
    const [options, setOptions] = useState<Options>({
        autoplay: true,
        rewind: true,
        arrows: false,
        drag: false,
        ...splideOptions
    });

    useEffect(() => {
        if (slides.length > 1) {
            setOptions(prevState => ({ ...prevState, arrows: true, pagination: true }))
        }
    }, [slides]);

    return (
        <div className={clsx("carousel", cssClass)}>
            <Splide
                aria-label={ariaLabel}
                hasTrack={false}
                options={options}
            >
                <SplideTrack>
                    {slides.length ? (
                        slides.map((slide, index) => (
                            <SplideSlide key={`slide-${index}`} className="carousel__slide">
                                {slide}
                            </SplideSlide>
                        ))
                    ) : (
                        <SplideSlide className="carousel__slide--no-content">
                            <span>{isLoading ? <Loader small /> : <Icon name="hide_image" />}</span>
                        </SplideSlide>
                    )}
                </SplideTrack>
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev"><Icon name="west" /></button>
                    <button className="splide__arrow splide__arrow--next"><Icon name="east" /></button>
                </div>
            </Splide>
        </div>
    );
};

export default Carousel;
