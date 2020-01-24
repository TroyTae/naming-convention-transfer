import spaces from 'one-spaces';
import { storiesOf } from '@storybook/html';

import '../packages/index.scss';

storiesOf('Text Field', module)
  .add('Filled Text Field', () => `
    <article style="width: 280px;">
      <h1>Basic</h1>
      <div class="${spaces('mca-text-field', 'mca-text-field--filled')}">
        <input type="text" class="mca-text-field__input" />
      </div>
    </article>
  `);
