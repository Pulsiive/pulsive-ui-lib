// import React, { useEffect, useState } from "react";
// import {ComponentStory, ComponentMeta} from "@storybook/react";

// import {Carousel} from "../../src/component/widget";

// export default {
//     title: "Widgets/Carousel",
//     component: Carousel,
//     argTypes: {
//         isLoading: { control: 'disabled' }
//     },
// } as ComponentMeta<typeof Carousel>;

// const Template: ComponentStory<typeof Carousel> = (args) => {
//     const [slides, setSlides] = useState<React.ReactNode[]>([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setSlides(args.slides);
//             setIsLoading(false);
//         }, 500);
//     }, []);

//     return (
//         <div style={{ width: '70vw', height: '70vh' }}>
//             <Carousel {...args} slides={slides} isLoading={isLoading} />
//         </div>
//     );
// };

// export const Default: ComponentStory<typeof Carousel> = Template.bind({});
// Default.args = {
//     ariaLabel: 'my awesome carousel',
//     slides: [
//         <img src="https://picsum.photos/800/400?random=1" alt="" />,
//         <>
//             <img src="https://picsum.photos/800/400?random=4" alt="" />
//             <div style={{ position: 'absolute', bottom: 0, padding: '2rem', backgroundColor: 'var(--color-grey-light)', width: '100%' }}>
//                 <span>Title</span>
//             </div>
//         </>,
//         <img src="https://picsum.photos/800/400?random=3" alt="" />,
//     ]
// }

// export const OneSlide: ComponentStory<typeof Carousel> = Template.bind({});
// OneSlide.args = {
//     ariaLabel: 'my awesome carousel - one slide',
//     slides: [
//         <img src="https://picsum.photos/800/400?random=1" alt="" />
//     ]
// }


// export const NoContent: ComponentStory<typeof Carousel> = Template.bind({});
// NoContent.args = {
//     ariaLabel: 'my awesome no-content carousel',
//     slides: []
// }
