import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
// @ts-ignore
import avatar from 'shared/assets/tests/avatar.png'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'Some',
      age: 35,
      country: Country.BE,
      lastname: 'Asaad',
      first: 'asds',
      currency: Currency.RUB,
      avatar
    }
  }
})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'Some',
      age: 35,
      country: Country.BE,
      lastname: 'Asaad',
      first: 'asds',
      currency: Currency.RUB,
      avatar
    }
  }
})]
