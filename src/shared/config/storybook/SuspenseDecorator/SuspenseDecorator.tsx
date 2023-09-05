import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponont:Story) => (
    <Suspense>
        <StoryComponont />

    </Suspense>
);
