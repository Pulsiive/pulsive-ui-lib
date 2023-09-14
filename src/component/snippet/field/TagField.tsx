import React, {FunctionComponent} from "react";
import Tag, {TagProps} from "../Tag";

type TagFieldProps = TagProps;

const TagField: FunctionComponent<TagFieldProps> = (props) => {
    return (
        <div className="tag-field">
            <Tag {...props}/>
        </div>
    );
};

export default TagField;
