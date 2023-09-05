import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'entities/Article/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    id: '1',
};
