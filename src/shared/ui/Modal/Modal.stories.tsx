import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias error qui reiciendis incidunt vel, iure expedita omnis nulla aliquam totam quas, distinctio odit animi libero fuga sunt ab et.',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias error qui reiciendis incidunt vel, iure expedita omnis nulla aliquam totam quas, distinctio odit animi libero fuga sunt ab et.',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
