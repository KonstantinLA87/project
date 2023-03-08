import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ProfileCard } from './ProfileCard';
import { Country } from '../../../Country/model/types/country';
import { Currency } from '../../../Currency/model/types/currency';
// @ts-ignore
import avatar from 'shared/assets/tests/avatar.png'

export default {
  title: 'enteties/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
  data: {
    username: 'Some',
    age: 35,
    country: Country.BE,
    lastname: 'Asaad',
    first: 'asds',
    currency: Currency.RUB,
    avatar
  }
};


export const Dark = Template.bind({});
Dark.args = {
  data: {
    username: 'Some',
    age: 35,
    country: Country.BE,
    lastname: 'Asaad',
    first: 'asds',
    currency: Currency.RUB,
    avatar
  }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  error: 'Some error'
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  isLoading: true
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];