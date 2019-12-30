import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Components', module)
    .add('Button', () => (
        <Button text="text"
            onClick={console.log}/>
    ));
