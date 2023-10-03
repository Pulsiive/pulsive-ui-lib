// import React, {useState} from 'react';
// import {ComponentMeta, ComponentStory} from '@storybook/react';

// import {ElementList, Section2Cols, Section2ColsAlignment, SectionCol, Tag, TagSize, TagStyle} from '../../../src/component/snippet';
// import {DEMO_USER_LIST} from "../DemoUserList";

// export default {
//     title: 'Snippets/Fields/ElementList',
//     component: ElementList,
//     argTypes: {}
// } as ComponentMeta<typeof ElementList>;

// const Template: ComponentStory<typeof ElementList> = (args) => {
//     const [selectedItems, setSelectedItems] = useState(DEMO_USER_LIST);
//     const handleRemove = (index: number) => {
//         setSelectedItems(prevState => {
//             let newSelectedItems = [...prevState];
//             newSelectedItems.splice(index, 1);
//             return newSelectedItems;
//         });
//     };

//     return (
//         <div style={{width: "95vw"}}>
//             <Section2Cols alignment={Section2ColsAlignment.TOP}>
//                 <SectionCol>
//                     <ElementList {...args}>
//                         {selectedItems.map(({firstname, lastname}, index) =>
//                             <Tag key={index}
//                                  size={TagSize.SMALL}
//                                  style={TagStyle.PRIMARY_MIDNIGHT_LIGHT}
//                                  label={`${firstname} ${lastname}`}
//                                  icon={{name: "cancel", onClick: () => handleRemove(index)}}
//                                  reverse
//                             />
//                         )}
//                     </ElementList>
//                 </SectionCol>
//                 <SectionCol>
//                     <ElementList {...args}/>
//                 </SectionCol>
//             </Section2Cols>
//         </div>
//     )
// };

// export const Default = Template.bind({});
// Default.args = {
//     placeholder: "Your selected users will appear here"
// };
