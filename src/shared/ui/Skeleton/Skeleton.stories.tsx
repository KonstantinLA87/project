import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const CircleLight = Template.bind({});
CircleLight.args = {
  width: 100,
  height: 100,
  borderRadius: '50%'
};

export const CircleDark = Template.bind({});
CircleDark.args = {
  width: 100,
  height: 100,
  borderRadius: '50%'
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
