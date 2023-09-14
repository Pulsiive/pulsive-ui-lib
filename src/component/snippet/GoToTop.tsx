import React from "react";
import Icon from "./Icon";

const GoToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <button className="btn-go-to-top" onClick={scrollToTop}>
            <Icon name="keyboard_arrow_up" />
        </button>
    );
};

export default GoToTop;
