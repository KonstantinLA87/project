import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Some text'
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Some text',
  theme: ButtonTheme.CLEAR
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Some text',
  theme: ButtonTheme.OUTLINED
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Some text',
  theme: ButtonTheme.OUTLINED
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
