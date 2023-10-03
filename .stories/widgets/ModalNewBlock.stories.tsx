// import React, {useState} from "react";
// import {ComponentStory, ComponentMeta} from "@storybook/react";

// import {Button, ButtonLink, ModalActionsAlignment, ModalHeaderDirection} from "../../src/component/snippet";
// import {ModalNewBlock} from "../../src/component/widget";

// export default {
//     title: "Widgets/ModalNewBlock",
//     component: ModalNewBlock,
// } as ComponentMeta<typeof ModalNewBlock>;

// const Template: ComponentStory<typeof ModalNewBlock> = ({children, ...args}) => {
//     const [isActive, setActive] = useState(true);

//     return (
//         <>
//             <Button onClick={() => setActive(true)}>Open modal</Button>
//             <ModalNewBlock {...args} active={isActive} onClose={() => setActive(false)}>
//                 {children}
//             </ModalNewBlock>
//         </>
//     );
// };

// const defaultChildren = (
//     <p>Hello world !</p>
// );

// export const Default: ComponentStory<typeof ModalNewBlock> = Template.bind({});
// Default.args = {
//     children: defaultChildren,
// };

// export const DefaultAnimate: ComponentStory<typeof ModalNewBlock> = Template.bind({});
// DefaultAnimate.args = {
//     children: defaultChildren,
//     animate: true
// };

// export const DefaultKeepMounted: ComponentStory<typeof ModalNewBlock> = Template.bind({});
// DefaultKeepMounted.args = {
//     children: defaultChildren,
//     keepMounted: true
// };

// export const DefaultLoading: ComponentStory<typeof ModalNewBlock> = Template.bind({});
// DefaultLoading.args = {
//     loading: true,
//     children: defaultChildren,
// };

// export const WithHeaderTitle: ComponentStory<typeof ModalNewBlock> = Template.bind({});
// WithHeaderTitle.args = {
//     header: {title: "Mon titre"},
//     children: defaultChildren
// };

// export const WithoutOnClose: ComponentStory<typeof ModalNewBlock> = Template.bind({});
// WithoutOnClose.args = {
//     onClose: undefined,
//     children: <>
//         <p>Hello world !</p>
//         <Button>Close</Button>
//     </>,
// };

// export const WithSublink: ComponentStory<typeof ModalNewBlock> = Template.bind({});
// WithSublink.args = {
//     children: defaultChildren,
//     subLink: {
//         onClick: () => {
//         },
//         label: "Fermer"
//     }
// };

// export const WithActions: ComponentStory<typeof ModalNewBlock> = Template.bind({});
// WithActions.args = {
//     header: {title: "Mon titre"},
//     footer: {
//         alignment: ModalActionsAlignment.CENTER,
//         actions: [<ButtonLink onClick={() => {
//         }}>Get it !</ButtonLink>, <Button>Get it !</Button>]
//     },
//     children: <>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//     </>
// };

// export const WithHeaderStepper: ComponentStory<typeof ModalNewBlock> = Template.bind({});
// WithHeaderStepper.args = {
//     header: {title: "Mon titre", direction: ModalHeaderDirection.COLUMN, stepper: {steps: 3, activeStep: 0}},
//     footer: {
//         alignment: ModalActionsAlignment.CENTER,
//         actions: <Button>Get it !</Button>
//     },
//     children: <>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//         <p>Hello world !</p>
//     </>
// };