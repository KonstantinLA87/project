import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { NaviLink, NaviLinkTheme } from './NaviLink';


export default {
  title: 'shared/NaviLink',
  component: NaviLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  },
} as ComponentMeta<typeof NaviLink>;

const Template: ComponentStory<typeof NaviLink> = (args) => <NaviLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Some text',
  theme: NaviLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Some text',
  theme: NaviLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Some text',
  theme: NaviLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Some text',
  theme: NaviLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
