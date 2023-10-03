// import React, {useState} from "react";
// import {action} from '@storybook/addon-actions';
// import {ComponentStory, ComponentMeta} from "@storybook/react";

// import {Button} from "../../src/component/snippet";
// import {ModalNotification} from "../../src/component/widget";

// export default {
//     title: "Widgets/ModalNotification",
//     component: ModalNotification,
// } as ComponentMeta<typeof ModalNotification>;

// const Template: ComponentStory<typeof ModalNotification> = (args) => {
//     const [isActive, setActive] = useState(true);

//     return (
//         <>
//             <Button onClick={() => setActive(true)}>reset</Button>
//             <ModalNotification active={isActive} onClose={() => setActive(false)} {...args} />
//         </>
//     );
// };

// export const Default: ComponentStory<typeof ModalNotification> = Template.bind({});
// Default.args = {
//     onCallToAction: action('onCallToAction'),
//     content: {
//         call_to_action: 'Learn more',
//         image: 'https://picsum.photos/650/400?random=1'
//     },
//     subLink: {
//         onClick: action('onClick'),
//         label: "Don't show me this again"
//     }
// };

// export const WithText: ComponentStory<typeof ModalNotification> = Template.bind({});
// WithText.args = {
//     onCallToAction: action('onCallToAction'),
//     content: {
//         title: 'Nouveauté : Le brief de campagne en ligne',
//         subtitle: 'Briefez directement les équipes depuis votre espace',
//         text: 'Vous avez une campagne à préparer ? Une demande spécifique ? Désormais vous pouvez briefer notre équipe depuis votre espace Audience.',
//         call_to_action: 'Learn more',
//         image: 'https://picsum.photos/650/400?random=1'
//     },
//     subLink: {
//         onClick: action('onClick'),
//         label: "Don't show me this again"
//     }
// };
