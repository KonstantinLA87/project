import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: 'Officia mollit ea reprehenderit consequat. Lorem amet cillum commodo veniam enim velit. Velit sit non voluptate veniam. Dolor non velit officia commodo in deserunt id laborum consectetur exercitation amet mollit ut. Ad irure ea laboris quis ad. Nulla Lorem mollit dolore proident ea dolore mollit magna ut cupidatat commodo consectetur proident.'
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Officia mollit ea reprehenderit consequat. Lorem amet cillum commodo veniam enim velit. Velit sit non voluptate veniam. Dolor non velit officia commodo in deserunt id laborum consectetur exercitation amet mollit ut. Ad irure ea laboris quis ad. Nulla Lorem mollit dolore proident ea dolore mollit magna ut cupidatat commodo consectetur proident.'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
