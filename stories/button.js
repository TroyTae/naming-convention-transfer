import spaces from 'one-spaces';
import { storiesOf } from '@storybook/html';

import '../packages/index.scss';

storiesOf('Button', module)
  .add('Contained Button', () => `
    <section>
      <button class="${spaces('mca-button', 'mca-button--contained')}">
        <span class="mca-button__label">BUTTON</span>
      </button>
      <button class="${spaces('mca-button', 'mca-button--contained')}">
        <i class="${spaces('material-icons', 'mca-icon', 'mca-icon--dense')}">grade</i><!--
     --><span class="mca-button__label">BUTTON</span>
      </button>
      <button class="${spaces('mca-button', 'mca-button--contained')}">
        <span class="mca-button__label">BUTTON</span><!--
     --><i class="${spaces('material-icons', 'mca-icon', 'mca-icon--dense')}">grade</i>
      </button>   
    </section>
  `)
  .add('Outlined Button', () => `
    <section>
      <button class="${spaces('mca-button', 'mca-button--outlined')}">
        <span class="mca-button__label">BUTTON</span>
      </button>
      <button class="${spaces('mca-button', 'mca-button--outlined')}">
        <i class="${spaces('material-icons', 'mca-icon', 'mca-icon--dense')}">grade</i><!--
     --><span class="mca-button__label">BUTTON</span>
      </button>
      <button class="${spaces('mca-button', 'mca-button--outlined')}">
        <span class="mca-button__label">BUTTON</span><!--
     --><i class="${spaces('material-icons', 'mca-icon', 'mca-icon--dense')}">grade</i>
      </button>
    </section>
  `)
  .add('Text Button', () => `
    <section>
      <button class="${spaces('mca-button', 'mca-button--text')}">
        <span class="mca-button__label">BUTTON</span>
      </button>
      <button class="${spaces('mca-button', 'mca-button--text')}">
        <i class="${spaces('material-icons', 'mca-icon', 'mca-icon--dense')}">grade</i><!--
     --><span class="mca-button__label">BUTTON</span>
      </button>
      <button class="${spaces('mca-button', 'mca-button--text')}">
        <span class="mca-button__label">BUTTON</span><!--
     --><i class="${spaces('material-icons', 'mca-icon', 'mca-icon--dense')}">grade</i>
      </button>
    </section>
  `)
  .add('Toggle Button', () => `
    <section>
      <button class="${spaces('mca-button', 'mca-button--toggle')}">
        <i class="${spaces('material-icons', 'mca-icon')}">format_align_justify</i>
      </button>
      <button class="${spaces('mca-button', 'mca-button--toggle')}">
        <i class="${spaces('material-icons', 'mca-icon')}">format_align_left</i>
      </button>
      <button class="${spaces('mca-button', 'mca-button--toggle')}">
        <i class="${spaces('material-icons', 'mca-icon')}">format_align_right</i>
      </button>
    </section>
  `);  
