import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { NavBar } from './NavBar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';


export default {
  title: 'widgets/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const AuthorizedLight = Template.bind({});
AuthorizedLight.args = {};
AuthorizedLight.decorators = [StoreDecorator({
  user: { authData: {}},
})];

export const AuthorizedDark = Template.bind({});
AuthorizedDark.args = {};
AuthorizedDark.decorators = [ThemeDecorator(Theme.DARK)];
AuthorizedDark.decorators = [StoreDecorator({
  user: { authData: {}},
})];