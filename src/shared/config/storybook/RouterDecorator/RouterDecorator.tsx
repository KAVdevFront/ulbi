import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponont:Story) => (
    <BrowserRouter>
        <StoryComponont />

    </BrowserRouter>
);
