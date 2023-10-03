// import React, {useState} from "react";
// import {action} from "@storybook/addon-actions";
// import {ComponentMeta, ComponentStory} from "@storybook/react";

// import {ActionMenuIcon, ActionsMenu, ContentBlock, ContentBlockAction, ContentBlockActionType, IconTooltip, InputText, StatusLabel, TableNew, TableNewActionColumn, TableNewColumn, TableNewColumnStyle, TableNewImage, TableNewRow} from "../../../src/component/snippet";
// import {DEMO_USER_LIST} from "../DemoUserList";
// import {SvgSirdataChip} from "../../../src";
// import {sortItems} from "../../../src/utils/helper";

// export default {
//     title: "Snippets/Table/Table",
//     component: ContentBlock,
//     parameters: {
//         layout: 'padded'
//     }
// } as ComponentMeta<typeof ContentBlock>;

// const Template: ComponentStory<typeof ContentBlock> = (args) => {
//     const [currentUsers, setCurrentUsers] = useState(DEMO_USER_LIST);

//     const handleSortUsers = (field: string, reverseOrder?: boolean) => {
//         setCurrentUsers(prevState => sortItems([...prevState], field, reverseOrder));
//     };

//     return (
//         <div className="main-content" style={{margin: 0}}>
//             <ContentBlock {...args} />
//         </div>
//     );
// };

// export const Default: ComponentStory<typeof ContentBlock> = Template.bind({});
// Default.args = {
//     header: {
//         title: {
//             label: "Basic table"
//         }
//     },
//     children:
//         <TableNew
//             columns={[
//                 {label: "Status", width: 10, styles: TableNewColumnStyle.ALIGN_CENTER},
//                 {label: "Firstname"},
//                 {label: "Lastname"},
//                 {label: "Company", styles: TableNewColumnStyle.HIDE_SCREEN_MEDIUM}
//             ]}>
//             {DEMO_USER_LIST.map(({status, firstname, lastname, company}, index) => (
//                 <TableNewRow key={index}>
//                     <TableNewColumn>
//                         <StatusLabel {...status}/>
//                     </TableNewColumn>
//                     <TableNewColumn>{firstname}</TableNewColumn>
//                     <TableNewColumn>{lastname}</TableNewColumn>
//                     <TableNewColumn styles={TableNewColumnStyle.HIDE_SCREEN_MEDIUM}>{company}</TableNewColumn>
//                 </TableNewRow>
//             ))}
//         </TableNew>
// };

// export const Empty: ComponentStory<typeof ContentBlock> = Template.bind({});
// Empty.args = {
//     header: {
//         title: {
//             label: "Empty Table"
//         }
//     },
//     children:
//         <TableNew
//             columns={[
//                 {label: "Status", width: 10},
//                 {label: "Firstname"},
//                 {label: "Lastname", styles: TableNewColumnStyle.HIDE_SCREEN_MEDIUM},
//                 {label: "Company", styles: TableNewColumnStyle.HIDE_SCREEN_MEDIUM}
//             ]}>
//             {[]}
//         </TableNew>
// };

// export const WithLink: ComponentStory<typeof ContentBlock> = Template.bind({});
// WithLink.args = {
//     header: {
//         title: {
//             label: "Table with link",
//             link: "/table"
//         }
//     },
//     children:
//         <TableNew
//             columns={[
//                 {label: "Status", width: 10, styles: TableNewColumnStyle.ALIGN_CENTER},
//                 {label: "Firstname", width: 20},
//                 {label: "Lastname", width: 20},
//                 {label: "Company", width: 30, styles: TableNewColumnStyle.HIDE_SCREEN_MEDIUM},
//                 {width: 5},
//             ]}>
//             {DEMO_USER_LIST.map(({status, firstname, lastname, company}, index) => (
//                 <TableNewRow key={index} onClick={action(`row #${index}`)}>
//                     <TableNewColumn>
//                         <StatusLabel {...status}/>
//                     </TableNewColumn>
//                     <TableNewColumn>{firstname}</TableNewColumn>
//                     <TableNewColumn styles={TableNewColumnStyle.NO_VERTICAL_PADDING}>
//                         <InputText name={"lastname"} value={lastname} onChange={action("change position")} small/>
//                     </TableNewColumn>
//                     <TableNewColumn styles={TableNewColumnStyle.HIDE_SCREEN_MEDIUM}>
//                         <span>{company}</span>
//                         <TableNewImage image={SvgSirdataChip}/>
//                         <TableNewImage image={"/images/logo-m.svg"}/>
//                     </TableNewColumn>
//                     <TableNewActionColumn styles={TableNewColumnStyle.ALIGN_RIGHT}>
//                         <IconTooltip
//                             icon={{name: ActionMenuIcon.EDIT}}
//                             text="Edit"
//                             onClick={action(`edit row #${index}`)}
//                         />
//                         <ActionsMenu
//                             iconTooltip={{icon: {name: ActionMenuIcon.MORE}, text: "More actions"}}
//                             items={[
//                                 {label: "Action 1", onClick: action(`action 1, row #${index}`)},
//                                 {label: "Action 2", onClick: action(`action 2, row #${index}`)},
//                                 {label: "Action 3", onClick: action(`action 3, row #${index}`)}
//                             ]}
//                         />
//                     </TableNewActionColumn>
//                 </TableNewRow>
//             ))}
//         </TableNew>,
//     footer: {
//         link: "/users",
//         label: "See all users"
//     }
// };

// export const WithActions: ComponentStory<typeof ContentBlock> = Template.bind({});
// WithActions.args = {
//     header: {
//         title: {
//             icon: {name: "groups"},
//             label: "Table with actions",
//             link: "/table"
//         },
//         actions: [
//             <ContentBlockAction type={ContentBlockActionType.EXPORT} label={"users"} onClick={action("export")}/>,
//             <ContentBlockAction type={ContentBlockActionType.ADD} onClick={action("add")}/>,
//         ]
//     },
//     children:
//         <TableNew
//             columns={[
//                 {label: "Status", width: 10, styles: TableNewColumnStyle.ALIGN_CENTER},
//                 {label: "Firstname", width: 20, sort: {field: "firstname"}},
//                 {label: "Lastname", width: 20, sort: {field: "lastname"}},
//                 {label: "Company", width: 30, styles: TableNewColumnStyle.HIDE_SCREEN_MEDIUM},
//                 {width: 5}
//             ]}>
//             {DEMO_USER_LIST.map(({status, firstname, lastname, company}, index) => (
//                 <TableNewRow key={index} onClick={action(`row #${index}`)}>
//                     <TableNewColumn>
//                         <StatusLabel {...status}/>
//                     </TableNewColumn>
//                     <TableNewColumn>{firstname}</TableNewColumn>
//                     <TableNewColumn styles={TableNewColumnStyle.NO_VERTICAL_PADDING}>
//                         <InputText name={"lastname"} value={lastname} onChange={action("change position")} small/>
//                     </TableNewColumn>
//                     <TableNewColumn styles={TableNewColumnStyle.HIDE_SCREEN_MEDIUM}>
//                         <span>{company}</span>
//                         <TableNewImage image={SvgSirdataChip}/>
//                         <TableNewImage image={"/images/logo-m.svg"}/>
//                     </TableNewColumn>
//                     <TableNewActionColumn styles={TableNewColumnStyle.ALIGN_RIGHT}>
//                         <IconTooltip
//                             icon={{name: ActionMenuIcon.EDIT}}
//                             text="Edit"
//                             onClick={action(`edit row #${index}`)}
//                         />
//                         <ActionsMenu
//                             iconTooltip={{icon: {name: ActionMenuIcon.MORE}, text: "More actions"}}
//                             items={[
//                                 {label: "Action 1", onClick: action(`action 1, row #${index}`)},
//                                 {label: "Action 2", onClick: action(`action 2, row #${index}`)},
//                                 {label: "Action 3", onClick: action(`action 3, row #${index}`)}
//                             ]}
//                         />
//                     </TableNewActionColumn>
//                 </TableNewRow>
//             ))}
//         </TableNew>
// };

// export const WithPagination: ComponentStory<typeof ContentBlock> = Template.bind({});
// WithPagination.args = {
//     header: {
//         title: {
//             icon: {name: "groups"},
//             label: "Table with link",
//             link: "/table"
//         }
//     },
//     children:
//         <TableNew
//             columns={[
//                 {label: "Status", width: 10, styles: TableNewColumnStyle.ALIGN_CENTER},
//                 {label: "Firstname", width: 20},
//                 {label: "Lastname", width: 20},
//                 {label: "Company", width: 30, styles: TableNewColumnStyle.HIDE_SCREEN_MEDIUM},
//                 {width: 5},
//             ]}
//             pagination={4}>
//             {DEMO_USER_LIST.map(({status, firstname, lastname, company}, index) => (
//                 <TableNewRow key={index} onClick={action(`row #${index}`)}>
//                     <TableNewColumn>
//                         <StatusLabel {...status}/>
//                     </TableNewColumn>
//                     <TableNewColumn>{firstname}</TableNewColumn>
//                     <TableNewColumn styles={TableNewColumnStyle.NO_VERTICAL_PADDING}>
//                         <InputText name={"lastname"} value={lastname} onChange={action("change position")} small/>
//                     </TableNewColumn>
//                     <TableNewColumn styles={TableNewColumnStyle.HIDE_SCREEN_MEDIUM}>
//                         <span>{company}</span>
//                         <TableNewImage image={SvgSirdataChip}/>
//                         <TableNewImage image={"/images/logo-m.svg"}/>
//                     </TableNewColumn>
//                     <TableNewActionColumn styles={TableNewColumnStyle.ALIGN_RIGHT}>
//                         <IconTooltip
//                             icon={{name: ActionMenuIcon.EDIT}}
//                             text="Edit"
//                             onClick={action(`edit row #${index}`)}
//                         />
//                         <ActionsMenu
//                             iconTooltip={{icon: {name: ActionMenuIcon.MORE}, text: "More actions"}}
//                             items={[
//                                 {label: "Action 1", onClick: action(`action 1, row #${index}`)},
//                                 {label: "Action 2", onClick: action(`action 2, row #${index}`)},
//                                 {label: "Action 3", onClick: action(`action 3, row #${index}`)}
//                             ]}
//                         />
//                     </TableNewActionColumn>
//                 </TableNewRow>
//             ))}
//         </TableNew>
// };
