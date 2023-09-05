import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Avatar } from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        age: 22,
        city: 'Brest',
        first: 'Artem',
        username: 'Artem',
        lastname: 'Kalinin',
        country: Country.Belarus,
        currency: Currency.USD,
        avatar: Avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};
