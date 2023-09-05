import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TabItem, Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    tabs: [{
        content: '123',
        value: '1',
    },
    {
        content: '123',
        value: '12',
    },
    {
        content: '123',
        value: '123',
    }],
};
