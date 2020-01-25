import spaces from 'one-spaces';
import { storiesOf } from '@storybook/html';

import '../packages/index.scss';

storiesOf('Text Field', module)
  .add('Filled Text Field', () => `
    <article style="max-width: 280px;">
      <h1>Basic</h1>
      <div class="mca-text-field">
        <input
          type="text"
          class="${spaces('mca-text-field__input', 'mca-text-field__input--filled')}"
        />
      </div>
      <h1>Placeholder</h1>
      <div class="mca-text-field">
        <input
          type="text"
          placeholder="Write text in here"
          class="${spaces('mca-text-field__input', 'mca-text-field__input--filled')}"
        />
      </div>
      <h1>Disabled</h1>
      <div class="mca-text-field">
        <input
          disabled
          type="text"
          placeholder="You cannot write in here"
          class="${spaces('mca-text-field__input', 'mca-text-field__input--filled')}"
        />
      </div>
    </article>
  `)
  .add('Outlined Text Field', () => `
    <article style="max-width: 280px;">
      <h1>Basic</h1>
      <div class="mca-text-field">
        <input
          type="text"
          class="${spaces('mca-text-field__input', 'mca-text-field__input--outlined')}"
        />
      </div>
      <h1>Placeholder</h1>
      <div class="mca-text-field">
        <input
          type="text"
          placeholder="Write text in here"
          class="${spaces('mca-text-field__input', 'mca-text-field__input--outlined')}"
        />
      </div>
      <h1>Disabled</h1>
      <div class="mca-text-field">
        <input
          disabled
          type="text"
          placeholder="You cannot write in here"
          class="${spaces('mca-text-field__input', 'mca-text-field__input--outlined')}"
        />
      </div>
    </article>
  `);
