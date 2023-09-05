import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;
const comment = {
    id: '1',
    text: 'some comment',
    user: { id: '1', username: 'Vasya' },
};

export const Normal = Template.bind({});
Normal.args = {
    comment,
};

export const Loading = Template.bind({});
Loading.args = {
    comment,
    isLoading: true,
};
