import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator((storyFn) => (
    <div>
        some global wrapper
        {storyFn()}
    </div>
));