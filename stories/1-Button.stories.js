import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import {IcarusProductCard, IcaruCard} from 'common-component';

console.log(IcarusProductCard)
export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello asd Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    <IcarusProductCard />
    <IcaruCard />
  </Button>
);
