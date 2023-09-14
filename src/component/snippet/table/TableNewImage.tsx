import React, {FunctionComponent} from "react";

type TableNewImageProps = {
    image: string | React.FunctionComponent;
}

const TableNewImage: FunctionComponent<TableNewImageProps> = ({image}) => {
    return (
        typeof image === "string" ?
            <img src={image} alt=""/> :
            React.createElement(image)
    );
}

export default TableNewImage;
