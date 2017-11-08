import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import Button from '../lib/Button';

storiesOf('Button', module)
  .add('with text', () => <button onClick={action('clicked')}>Hello Button</button>)
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>
      <span role="img" aria-label="emoji">
        😀 😎 👍 💯
      </span>
    </button>
  ))
  .add(
    'Suite button primary',
    withNotes('The primary button for the all suite')(() => (
      <Button primary onClick={action('cliked')}>
        Hello world
      </Button>
    )),
  );
