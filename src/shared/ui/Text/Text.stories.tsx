import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextStyle } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
  title: 'Some title',
  text: 'Tempor deserunt laboris laboris consequat incididunt irure mollit reprehenderit. Anim mollit tempor irure ea amet proident aliquip nulla commodo non. Occaecat cupidatat do consequat consequat ipsum deserunt deserunt elit magna tempor consequat.'
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Some title',
  text: 'Tempor deserunt laboris laboris consequat incididunt irure mollit reprehenderit. Anim mollit tempor irure ea amet proident aliquip nulla commodo non. Occaecat cupidatat do consequat consequat ipsum deserunt deserunt elit magna tempor consequat.'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Some title',
  text: 'Tempor deserunt laboris laboris consequat incididunt irure mollit reprehenderit. Anim mollit tempor irure ea amet proident aliquip nulla commodo non. Occaecat cupidatat do consequat consequat ipsum deserunt deserunt elit magna tempor consequat.',
  style: TextStyle.ERROR
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Some title',
  text: 'Tempor deserunt laboris laboris consequat incididunt irure mollit reprehenderit. Anim mollit tempor irure ea amet proident aliquip nulla commodo non. Occaecat cupidatat do consequat consequat ipsum deserunt deserunt elit magna tempor consequat.',
  style: TextStyle.ERROR
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
