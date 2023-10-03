// import React, {useState} from "react";
// import {ComponentStory, ComponentMeta} from "@storybook/react";

// import {Button} from "../../src/component/snippet";
// import {action} from "@storybook/addon-actions";
// import ModalSaveBeforeLeaving from "../../src/component/widget/ModalSaveBeforeLeaving";

// export default {
//     title: "Widgets/ModalSaveBeforeLeaving",
//     component: ModalSaveBeforeLeaving,
//     argTypes: {
//         active: { control: 'disabled' }
//     }
// } as ComponentMeta<typeof ModalSaveBeforeLeaving>;

// const Template: ComponentStory<typeof ModalSaveBeforeLeaving> = (args) => {
//     const [isActive, setActive] = useState(true);

//     return (
//         <>
//             <Button onClick={() => setActive(true)}>Open modal</Button>
//             <ModalSaveBeforeLeaving {...args} active={isActive}
//                                     onLeave={() => setActive(false)}
//                                     onSave={() => setActive(false)}
//                                     onCancel={() => setActive(false)}/>
//         </>
//     );
// };

// export const Default: ComponentStory<typeof ModalSaveBeforeLeaving> = Template.bind({});
// Default.args = {
//     onSave: action('onSave'),
//     onLeave: action('onLeave'),
//     onCancel: action('onCancel')
// };
