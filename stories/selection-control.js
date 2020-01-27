import { storiesOf } from '@storybook/html';

import './index.scss';

storiesOf('Selection Control', module)
  .add('Checkbox', () => `
    <h1>Basic</h1>
    <label>
      <div class="mca-selection-control middle">
        <input type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox">
          <i class="material-icons mca-icon mca-icon--dense">check</i>
        </div>
      </div>
      <span class="middle">Checkbox1</span>
    </label>
    <label>
      <div class="mca-selection-control middle">
        <input type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox">
          <i class="material-icons mca-icon mca-icon--dense">check</i>
        </div>
      </div>
      <span class="middle">Checkbox2</span>
    </label>
    <label>
      <div class="mca-selection-control middle">
        <input type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox">
          <i class="material-icons mca-icon mca-icon--dense">check</i>
        </div>
      </div>
      <span class="middle">Checkbox3</span>
    </label>
    <h1>Disabled</h1>
    <label>
      <div class="mca-selection-control middle">
        <input disabled checked type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox">
          <i class="material-icons mca-icon mca-icon--dense">check</i>
        </div>
      </div>
      <span class="middle">Checked</span>
    </label>
    <label>
      <div class="mca-selection-control middle">
        <input disabled type="checkbox" class="mca-selection-control__input" />
        <div class="mca-selection-control__checkbox">
          <i class="material-icons mca-icon mca-icon--dense">check</i>
        </div>
      </div>
      <span class="middle">Unchecked</span>
    </label>
  `)
  .add('Radio Button', () => `
    <h1>Basic</h1>
    <label>
      <div class="mca-selection-control middle">
        <input type="radio" name="basic" value="1" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span class="middle">Radio button1</span>
    </label>
    <label>
      <div class="mca-selection-control middle">
        <input type="radio" name="basic" value="2" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span class="middle">Radio button2</span>
    </label>
    <label>
      <div class="mca-selection-control middle">
        <input type="radio" name="basic" value="3" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span class="middle">Radio button3</span>
    </label>
    <h1>Disabled</h1>
    <label>
      <div class="mca-selection-control middle">
        <input disabled checked type="radio" name="disabled" value="checked" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span class="middle">Checked</span>
    </label>
    <label>
      <div class="mca-selection-control middle">
        <input disabled type="radio" name="disabled" value="unchecked" class="mca-selection-control__input" />
        <div class="mca-selection-control__radio"></div>
      </div>
      <span class="middle">Unchecked</span>
    </label>
  `);
