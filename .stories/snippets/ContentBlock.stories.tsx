import React from "react";
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {DEMO_USER_LIST} from "./DemoUserList";
import {
    ActionMenuIcon,
    ActionsMenu,
    Alert,
    AlertSeverity,
    Box,
    BoxShadow,
    Button,
    ButtonSize,
    Checkbox,
    ContentBlock,
    IconTooltip,
    InputText,
    SearchField,
    SearchToolbar,
    Select,
    StatusLabel,
    TableNew,
    TableNewActionColumn,
    TableNewColumn,
    TableNewColumnStyle,
    TableNewImage,
    TableNewRow
} from "../../src/component/snippet";
import {SvgSirdataChip} from "../../src/component/svg";

export default {
    title: "Snippets/ContentBlock",
    component: ContentBlock,
    parameters: {
        layout: 'padded'
    }
} as ComponentMeta<typeof ContentBlock>;

const Template: ComponentStory<typeof ContentBlock> = (args) => {
    return (
        <div className="main-content" style={{margin: 0}}>
            <ContentBlock {...args} />
        </div>
    );
};

export const WithBox: ComponentStory<typeof ContentBlock> = Template.bind({});
WithBox.args = {
    header: {
        title: {
            label: "Basic Content"
        }
    },
    children:
        (<Box>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis,
                scelerisque quam vitae, rhoncus sem. Sed tristique enim
                nec imperdiet elementum. Nam ut eros et risus
                pellentesque pharetra nec vel justo. Vivamus mattis
                justo neque, at porttitor justo aliquet quis. Aenean
                quis elit tellus. Integer volutpat turpis in sodales
                finibus. Aenean facilisis suscipit erat vel molestie.
                Etiam a pellentesque lorem. Nulla rutrum velit ac odio
                semper, volutpat semper tellus lacinia. Nunc ne c
                consectetur justo, in interdum enim. Aliquam et enim
                imperdiet, feugiat velit ac, suscipit felis.
            </p>
        </Box>),
    footer: {
        link: "#my-content",
        label: "Go to content",
        target: "_blank"
    }
};

export const WithBoxClickable: ComponentStory<typeof ContentBlock> = Template.bind({});
WithBoxClickable.args = {
    header: {
        title: {
            label: "Clickable Content",
            link: "#my-content"
        }
    },
    children:
        (<Box shadow={BoxShadow.BLACK_MEDIUM} onClick={action('onClick')}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis,
                scelerisque quam vitae, rhoncus sem. Sed tristique enim
                nec imperdiet elementum. Nam ut eros et risus
                pellentesque pharetra nec vel justo. Vivamus mattis
                justo neque, at porttitor justo aliquet quis. Aenean
                quis elit tellus. Integer volutpat turpis in sodales
                finibus. Aenean facilisis suscipit erat vel molestie.
                Etiam a pellentesque lorem. Nulla rutrum velit ac odio
                semper, volutpat semper tellus lacinia. Nunc ne c
                consectetur justo, in interdum enim. Aliquam et enim
                imperdiet, feugiat velit ac, suscipit felis.
            </p>
        </Box>),
    footer: {
        link: "#my-content",
        label: "Go to content",
        target: "_blank"
    }
};

export const WithTable: ComponentStory<typeof ContentBlock> = Template.bind({});
WithTable.args = {
    header: {
        title: {
            label: "Table Content"
        },
        actions: [
            <Button size={ButtonSize.SMALL} icon={{name: "add_circle"}} onClick={action('onAdd')}>Add</Button>
        ],
    },
    children:
        <>
            <Alert text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta risus. Nunc eu velit lobortis, ..."} severity={AlertSeverity.INFO} fullWidth/>
            <SearchToolbar searchBar={{value: "", onChange: action('onChange'), placeholder: "Search for ..."}}
                           onClearFilters={action('onClearFilters')}
                           canHideFilters>
                <SearchField label={"Select"}>
                    <Select name={"select"}
                            value={""}
                            options={[
                                {value: "option 1", label: "Option 1"},
                                {value: "option 2", label: "Option 2"}
                            ]}
                            onChange={action('onChange')}/>
                </SearchField>
                <SearchField label={"Text"}>
                    <InputText name={"text"}
                               placeholder={"Type text..."}
                               value={""}
                               onChange={action('onChange')}/>
                </SearchField>
                <SearchField label={"Checkbox"}>
                    <Checkbox name={"checkbox"}
                              label={"Checkbox label"}
                              checked={false}
                              onChange={action('onChange')}/>
                </SearchField>
            </SearchToolbar>
            <TableNew
                columns={[
                    {label: "Status", width: 10, styles: TableNewColumnStyle.ALIGN_CENTER},
                    {label: "Firstname", width: 20, sort: {field: "firstname"}},
                    {label: "Lastname", width: 20, sort: {field: "lastname"}},
                    {label: "Company", width: 30, styles: TableNewColumnStyle.HIDE_SCREEN_MEDIUM},
                    {width: 5},
                ]}
                pagination={4}>
                {DEMO_USER_LIST.map(({status, firstname, lastname, company}, index) => (
                    <TableNewRow key={index} onClick={action(`row #${index}`)}>
                        <TableNewColumn>
                            <StatusLabel {...status}/>
                        </TableNewColumn>
                        <TableNewColumn>{firstname}</TableNewColumn>
                        <TableNewColumn styles={TableNewColumnStyle.NO_VERTICAL_PADDING}>
                            <InputText name={"lastname"} value={lastname} onChange={action("change position")} small/>
                        </TableNewColumn>
                        <TableNewColumn styles={TableNewColumnStyle.HIDE_SCREEN_MEDIUM}>
                            <span>{company}</span>
                            <TableNewImage image={SvgSirdataChip}/>
                            <TableNewImage image={"/images/logo-m.svg"}/>
                        </TableNewColumn>
                        <TableNewActionColumn styles={TableNewColumnStyle.ALIGN_RIGHT}>
                            <IconTooltip
                                icon={{name: ActionMenuIcon.EDIT}}
                                text="Edit"
                                onClick={action(`edit row #${index}`)}
                            />
                            <ActionsMenu
                                iconTooltip={{icon: {name: ActionMenuIcon.MORE}, text: "More actions"}}
                                items={[
                                    {label: "Action 1", onClick: action(`action 1, row #${index}`)},
                                    {label: "Action 2", onClick: action(`action 2, row #${index}`)},
                                    {label: "Action 3", onClick: action(`action 3, row #${index}`)}
                                ]}
                            />
                        </TableNewActionColumn>
                    </TableNewRow>
                ))}
            </TableNew>
        </>
};
