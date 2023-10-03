// import React, {useState} from "react";
// import {ComponentStory, ComponentMeta} from "@storybook/react";

// import {Button} from "../../src/component/snippet";
// import {ModalConfirmMessage} from "../../src/component/widget";
// import {action} from "@storybook/addon-actions";

// export default {
//     title: "Widgets/ModalConfirmMessage",
//     component: ModalConfirmMessage,
//     argTypes: {
//         active: { control: 'disabled' }
//     }
// } as ComponentMeta<typeof ModalConfirmMessage>;

// const Template: ComponentStory<typeof ModalConfirmMessage> = (args) => {
//     const [isActive, setActive] = useState(true);

//     return (
//         <>
//             <Button onClick={() => setActive(true)}>Open modal</Button>
//             <ModalConfirmMessage {...args} active={isActive} cancel={{onClick: () => setActive(false)}}/>
//         </>
//     );
// };

// export const Default: ComponentStory<typeof ModalConfirmMessage> = Template.bind({});
// Default.args = {
//     confirm: {onClick: action('onConfirm')},
//     message: "Are you sure you want to delete ... ?"
// };
