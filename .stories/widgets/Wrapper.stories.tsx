import React, {useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Wrapper from "../../src/component/widget/Wrapper";
import {Color, MainAlertBar, MainContent, MainHeaderBurgerMenu, MainHeaderLayout, MainHeaderLogo, MainHeaderSlice, MainHeaderSubLayout, SvgSirdataLogoWhite} from "../../src";
import {action} from "@storybook/addon-actions";

export default {
    title: "Widgets/Wrapper",
    component: Wrapper,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = (args) => {
    const [isShowBurgerMenu, setShowBurgerMenu] = useState(false);

    return (
        <Wrapper {...args}>
            <MainAlertBar text="You are currently logged with the partner account Marty McFly (12345)"
                          colors={{backgroundColor: Color.CORAL, color: Color.WHITE}}
                          icon={{name: "warning", outlined: true}}/>
            <MainHeaderLayout>
                <MainHeaderSlice>
                    <MainHeaderBurgerMenu items={[{label: "Home", text: "Home", path: "/home", icon: {name: "home"}}]}
                                          activePath={""}
                                          active={isShowBurgerMenu}
                                          onOpen={() => setShowBurgerMenu(true)}
                                          onClose={() => setShowBurgerMenu(false)}
                                          onClickLink={action("onClick")}/>
                    <MainHeaderLogo link="/home" logo={SvgSirdataLogoWhite} onClick={action("onClick")}/>
                </MainHeaderSlice>
            </MainHeaderLayout>
            <MainHeaderSubLayout>
                <div style={{padding: "1.5rem", boxShadow: `2px 2px 6px ${Color.GREY}`}}>MainHeaderSubLayout</div>
            </MainHeaderSubLayout>
            <MainContent>
                <h1>Wrapper</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta risus. Nunc eu velit lobortis, scelerisque quam vitae, rhoncus sem. Sed tristique enim nec imperdiet elementum. Nam ut eros et risus pellentesque pharetra nec vel justo. Vivamus mattis justo neque, at
                    porttitor justo aliquet quis. Aenean quis elit tellus. Integer volutpat turpis in sodales finibus. Aenean facilisis suscipit erat vel molestie. Etiam a pellentesque lorem. Nulla rutrum velit ac odio semper, volutpat semper tellus lacinia. Nunc ne cconsectetur justo, in interdum
                    enim. Aliquam et enim imperdiet, feugiat velit ac, suscipit felis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta risus. Nunc eu velit lobortis, scelerisque quam vitae, rhoncus sem. Sed tristique enim nec imperdiet elementum. Nam ut eros et risus pellentesque pharetra nec vel justo. Vivamus mattis justo neque, at
                    porttitor justo aliquet quis. Aenean quis elit tellus. Integer volutpat turpis in sodales finibus. Aenean facilisis suscipit erat vel molestie. Etiam a pellentesque lorem. Nulla rutrum velit ac odio semper, volutpat semper tellus lacinia. Nunc ne cconsectetur justo, in interdum
                    enim. Aliquam et enim imperdiet, feugiat velit ac, suscipit felis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta risus. Nunc eu velit lobortis, scelerisque quam vitae, rhoncus sem. Sed tristique enim nec imperdiet elementum. Nam ut eros et risus pellentesque pharetra nec vel justo. Vivamus mattis justo neque, at
                    porttitor justo aliquet quis. Aenean quis elit tellus. Integer volutpat turpis in sodales finibus. Aenean facilisis suscipit erat vel molestie. Etiam a pellentesque lorem. Nulla rutrum velit ac odio semper, volutpat semper tellus lacinia. Nunc ne cconsectetur justo, in interdum
                    enim. Aliquam et enim imperdiet, feugiat velit ac, suscipit felis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta risus. Nunc eu velit lobortis, scelerisque quam vitae, rhoncus sem. Sed tristique enim nec imperdiet elementum. Nam ut eros et risus pellentesque pharetra nec vel justo. Vivamus mattis justo neque, at
                    porttitor justo aliquet quis. Aenean quis elit tellus. Integer volutpat turpis in sodales finibus. Aenean facilisis suscipit erat vel molestie. Etiam a pellentesque lorem. Nulla rutrum velit ac odio semper, volutpat semper tellus lacinia. Nunc ne cconsectetur justo, in interdum
                    enim. Aliquam et enim imperdiet, feugiat velit ac, suscipit felis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta risus. Nunc eu velit lobortis, scelerisque quam vitae, rhoncus sem. Sed tristique enim nec imperdiet elementum. Nam ut eros et risus pellentesque pharetra nec vel justo. Vivamus mattis justo neque, at
                    porttitor justo aliquet quis. Aenean quis elit tellus. Integer volutpat turpis in sodales finibus. Aenean facilisis suscipit erat vel molestie. Etiam a pellentesque lorem. Nulla rutrum velit ac odio semper, volutpat semper tellus lacinia. Nunc ne cconsectetur justo, in interdum
                    enim. Aliquam et enim imperdiet, feugiat velit ac, suscipit felis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta risus. Nunc eu velit lobortis, scelerisque quam vitae, rhoncus sem. Sed tristique enim nec imperdiet elementum. Nam ut eros et risus pellentesque pharetra nec vel justo. Vivamus mattis justo neque, at
                    porttitor justo aliquet quis. Aenean quis elit tellus. Integer volutpat turpis in sodales finibus. Aenean facilisis suscipit erat vel molestie. Etiam a pellentesque lorem. Nulla rutrum velit ac odio semper, volutpat semper tellus lacinia. Nunc ne cconsectetur justo, in interdum
                    enim. Aliquam et enim imperdiet, feugiat velit ac, suscipit felis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta risus. Nunc eu velit lobortis, scelerisque quam vitae, rhoncus sem. Sed tristique enim nec imperdiet elementum. Nam ut eros et risus pellentesque pharetra nec vel justo. Vivamus mattis justo neque, at
                    porttitor justo aliquet quis. Aenean quis elit tellus. Integer volutpat turpis in sodales finibus. Aenean facilisis suscipit erat vel molestie. Etiam a pellentesque lorem. Nulla rutrum velit ac odio semper, volutpat semper tellus lacinia. Nunc ne cconsectetur justo, in interdum
                    enim. Aliquam et enim imperdiet, feugiat velit ac, suscipit felis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta risus. Nunc eu velit lobortis, scelerisque quam vitae, rhoncus sem. Sed tristique enim nec imperdiet elementum. Nam ut eros et risus pellentesque pharetra nec vel justo. Vivamus mattis justo neque, at
                    porttitor justo aliquet quis. Aenean quis elit tellus. Integer volutpat turpis in sodales finibus. Aenean facilisis suscipit erat vel molestie. Etiam a pellentesque lorem. Nulla rutrum velit ac odio semper, volutpat semper tellus lacinia. Nunc ne cconsectetur justo, in interdum
                    enim. Aliquam et enim imperdiet, feugiat velit ac, suscipit felis.
                </p>
            </MainContent>
        </Wrapper>
    );
};

export const Default: ComponentStory<typeof Wrapper> = Template.bind({});
Default.args = {};
