import React, {ChangeEvent, useState} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {UploadPanel} from "../../../src/component/snippet";
import {SvgUpload} from "../../../src";
import {action} from "@storybook/addon-actions";

export default {
    title: "Snippets/Fields/UploadPanel",
    component: UploadPanel,
} as ComponentMeta<typeof UploadPanel>;

const Template: ComponentStory<typeof UploadPanel> = (args) => {
    const [name, setName] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length === 1) {
            let regResults = e.target.files[0].name.match(/\.([0-9a-z]+)$/i);
            if (regResults && regResults.length === 2) {
                const file = e.target.files[0];
                setName(file.name);
            }
        }
    };
    const handleDelete = () => setName("");

    return <UploadPanel {...args} name={name} onChange={handleChange} onDelete={handleDelete}/>;
};

export const Default = Template.bind({});
Default.args = {
    onChange: action('onChange'),
    onDelete: action('onDelete')
};

export const WithImage = Template.bind({});
WithImage.args = {
    onChange: action('onChange'),
    onDelete: action('onDelete'),
    placeholder: "Click here to import your image",
    acceptType: [".jpg",".png",".svg"],
    image: SvgUpload
};