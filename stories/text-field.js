import spaces from 'one-spaces';
import { storiesOf } from '@storybook/html';

import '../packages/index.scss';

storiesOf('Text Field', module)
  .add('Contained Button', () => `
    <h1>Basic</h1>
    <div class="mca-text-field">
      <input type="text" class="mca-text-field__input" />
    </div>
  `);
