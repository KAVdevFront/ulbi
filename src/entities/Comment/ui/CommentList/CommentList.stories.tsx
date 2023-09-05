import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;
const comments = [
    {
        id: '1',
        text: 'some comment',
        user: { id: '1', username: 'Vasya' },
    },
    {
        id: '2',
        text: 'some comment',
        user: { id: '2', username: 'Petya' },
    },
    {
        id: '3',
        text: 'some comment',
        user: { id: '3', username: 'LEha' },
    },
];
export const Normal = Template.bind({});
Normal.args = {
    comments,
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
