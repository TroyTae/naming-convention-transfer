import { storiesOf } from '@storybook/html';

import '../packages/index.scss';

storiesOf('Selection Control', module)
  .add('Checkbox', () => `
    <h1>Basic</h1>
    <div class="mca-selection-control">
      <input type="checkbox" class="mca-selection-control__input" />
      <div class="mca-selection-control__checkbox"></div>
    </div>
  `)
  .add('Radio Button', () => `
    <h1>Basic</h1>
    <div class="mca-selection-control">
      <input type="radio" class="mca-selection-control__input" />
      <div class="mca-selection-control__radio"></div>
    </div>
  `);
