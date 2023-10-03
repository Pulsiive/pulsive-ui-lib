// import React, {useState} from "react";
// import {ComponentStory, ComponentMeta} from "@storybook/react";

// import {Button} from "../../src/component/snippet";
// import {ModalWarningUnsavedChanges} from "../../src/component/widget";
// import {action} from "@storybook/addon-actions";

// export default {
//     title: "Widgets/ModalWarningUnsavedChanges",
//     component: ModalWarningUnsavedChanges,
//     argTypes: {
//         active: { control: 'disabled' }
//     }
// } as ComponentMeta<typeof ModalWarningUnsavedChanges>;

// const Template: ComponentStory<typeof ModalWarningUnsavedChanges> = (args) => {
//     const [isActive, setActive] = useState(true);

//     return (
//         <>
//             <Button onClick={() => setActive(true)}>Open modal</Button>
//             <ModalWarningUnsavedChanges {...args} active={isActive} onCancel={() => setActive(false)} onConfirm={() => {}}/>
//         </>
//     );
// };

// export const Default: ComponentStory<typeof ModalWarningUnsavedChanges> = Template.bind({});
// Default.args = {
//     onCancel: action('onCancel'),
//     onConfirm: action('onConfirm')
// };
