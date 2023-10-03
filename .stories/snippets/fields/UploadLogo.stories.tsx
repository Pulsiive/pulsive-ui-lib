// import React, {ChangeEvent, useState} from "react";
// import {ComponentMeta, ComponentStory} from "@storybook/react";

// import {UploadLogo} from "../../../src/component/snippet";
// import {action} from "@storybook/addon-actions";

// export default {
//     title: "Snippets/Fields/UploadLogo",
//     component: UploadLogo,
// } as ComponentMeta<typeof UploadLogo>;

// const Template: ComponentStory<typeof UploadLogo> = (args) => {
//     const [logoUrl, setLogoUrl] = useState<string | undefined>("https://sirdata.com/images/logo-Sirdata.svg");
//     const [fileName, setFileName] = useState<string | undefined>();
//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files?.length === 1) {
//             let regResults = e.target.files[0].name.match(/\.([0-9a-z]+)$/i);
//             if (regResults && regResults.length === 2) {
//                 const file = e.target.files[0];
//                 setLogoUrl(undefined);
//                 setFileName(file.name);
//             }
//         }
//     };
//     const handleDelete = () => {
//         setLogoUrl(undefined);
//         setFileName(undefined);
//     }

//     return <UploadLogo {...args} fileName={fileName} logoUrl={logoUrl} onDelete={handleDelete} onChange={handleChange}/>;
// };

// export const Default = Template.bind({});
// Default.args = {
//     onChange: action('onChange'),
//     onDelete: action('onDelete')
// };

// export const Small = Template.bind({});
// Small.args = {
//     onChange: action('onChange'),
//     onDelete: action('onDelete'),
//     small: true
// };
