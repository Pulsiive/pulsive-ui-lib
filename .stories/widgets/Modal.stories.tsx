// import React, {useState} from "react";
// import {ComponentStory, ComponentMeta} from "@storybook/react";

// import {
//     Button,
//     ModalDescription,
//     ModalDescriptionAlignment,
//     ModalStepper,
//     ModalStepperAlignment,
//     ModalTitle,
//     ModalTitleAlignment,
//     ModalTitleSize,
// } from "../../src/component/snippet";
// import {Modal} from "../../src/component/widget";

// export default {
//     title: "Widgets/Modal",
//     component: Modal,
// } as ComponentMeta<typeof Modal>;

// const Template: ComponentStory<typeof Modal> = (args) => {
//     const [isActive, setActive] = useState(true);

//     return (
//         <>
//             <Button onClick={() => setActive(active => !active)}>Open modal</Button>
//             <Modal {...args} active={isActive} onClose={() => setActive(active => !active)} />
//         </>
//     );
// };

// export const Default: ComponentStory<typeof Modal> = Template.bind({});
// Default.args = {
//     loading: false,
//     children: <>
//         <ModalTitle>Modal Title</ModalTitle>
//         <ModalDescription>Modal Description Content</ModalDescription>
//     </>
// };

// export const WithStepper: ComponentStory<typeof Modal> = Template.bind({});
// WithStepper.args = {
//     loading: false,
//     children: <>
//         <ModalStepper activeStep={0} steps= {3} alignment={ModalStepperAlignment.LEFT} />
//         <ModalTitle alignment={ModalTitleAlignment.LEFT}>Modal Title</ModalTitle>
//         <ModalDescription>Modal Description Content</ModalDescription>
//     </>
// };

// export const WithHugeTitle: ComponentStory<typeof Modal> = Template.bind({});
// WithHugeTitle.args = {
//     loading: false,
//     children: <>
//         <ModalTitle size={ModalTitleSize.HUGE}>Modal Title</ModalTitle>
//         <ModalDescription alignment={ModalDescriptionAlignment.CENTER}>Modal Description Content</ModalDescription>
//     </>
// };
