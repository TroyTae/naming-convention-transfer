import { storiesOf } from '@storybook/html';

import '../packages/index.scss';

storiesOf('Selection Control', module)
  .add('Checkbox', () => `
    <h1>Basic</h1>
    <label>
      <div class="mca-selection-control">
        <input type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox"></div>
      </div>
      <span>Checkbox1</span>
    </label>
    <label>
      <div class="mca-selection-control">
        <input type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox"></div>
      </div>
      <span>Checkbox2</span>
    </label>
    <label>
      <div class="mca-selection-control">
        <input type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox"></div>
      </div>
      <span>Checkbox3</span>
    </label>
  `)
  .add('Radio Button', () => `
    <h1>Basic</h1>
    <label>
      <div class="mca-selection-control">
        <input type="radio" name="basic" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span>Radio button1</span>
    </label>
    <label>
      <div class="mca-selection-control">
        <input type="radio" name="basic" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span>Radio button2</span>
    </label>
    <label>
      <div class="mca-selection-control">
        <input type="radio" name="basic" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span>Radio button3</span>
    </label>
  `);
