import { storiesOf } from '@storybook/html';

import './index.scss';

storiesOf('List', module)
  .add('List', () => `
    <h1>Basic</h1>
    <ul class="mca-list">
      <li class="mca-list__item">Single-line item</li>
      <li class="mca-list__item">Single-line item longer text</li>
    </ul>
  `);
