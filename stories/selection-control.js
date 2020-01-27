import { storiesOf } from '@storybook/html';

import './index.scss';

storiesOf('Selection Control', module)
  .add('Checkbox', () => `
    <h1>Basic</h1>
    <label>
      <div class="mca-selection-control middle">
        <input type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox"></div>
      </div>
      <span class="middle">Checkbox1</span>
    </label>
    <label>
      <div class="mca-selection-control middle">
        <input type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox"></div>
      </div>
      <span class="middle">Checkbox2</span>
    </label>
    <label>
      <div class="mca-selection-control middle">
        <input type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox"></div>
      </div>
      <span class="middle">Checkbox3</span>
    </label>
  `)
  .add('Radio Button', () => `
    <h1>Basic</h1>
    <label>
      <div class="mca-selection-control middle">
        <input type="radio" name="basic" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span class="middle">Radio button1</span>
    </label>
    <label>
      <div class="mca-selection-control middle">
        <input type="radio" name="basic" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span class="middle">Radio button2</span>
    </label>
    <label>
      <div class="mca-selection-control middle">
        <input type="radio" name="basic" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span class="middle">Radio button3</span>
    </label>
  `);
