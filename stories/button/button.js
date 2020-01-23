import { storiesOf } from '@storybook/html';

import './button.scss';

const renderHtml = (id) => (`
  <article id="${id}">
    <section>
      <h1>Text Button</h1>
      <button class="mca-button--text">
        <span class="mca-button__label">BUTTON</span>
      </button>
      <button class="mca-button--text">
        <i class="material-icons mca-icon--dense">grade</i><!--
     --><span class="mca-button__label">BUTTON</span>
      </button>
      <button class="mca-button--text">
        <span class="mca-button__label">BUTTON</span><!--
     --><i class="material-icons mca-icon--dense">grade</i>
      </button>  
    </section>
    <section>
      <h1>Outlined Button</h1>
      <button class="mca-button--outlined">
        <span class="mca-button__label">BUTTON</span>
      </button>
      <button class="mca-button--outlined">
        <i class="material-icons mca-icon--dense">grade</i><!--
     --><span class="mca-button__label">BUTTON</span>
      </button>
      <button class="mca-button--outlined">
        <span class="mca-button__label">BUTTON</span><!--
     --><i class="material-icons mca-icon--dense">grade</i>
      </button>
    </section>
    <section>
      <h1>Contained Button</h1>
      <button class="mca-button--contained">
        <span class="mca-button__label">BUTTON</span>
      </button>
      <button class="mca-button--contained">
        <i class="material-icons mca-icon--dense">grade</i><!--
     --><span class="mca-button__label">BUTTON</span>
      </button>
      <button class="mca-button--contained">
        <span class="mca-button__label">BUTTON</span><!--
     --><i class="material-icons mca-icon--dense">grade</i>
      </button>   
    </section>
    <section>
      <h1>Toggle Button</h1>
      <button class="mca-button--toggle">
        <i class="material-icons mca-icon">format_align_justify</i>
      </button>
      <button class="mca-button--toggle">
        <i class="material-icons mca-icon">format_align_left</i>
      </button>
      <button class="mca-button--toggle">
        <i class="material-icons mca-icon">format_align_right</i>
      </button>
    </section>
    <section>
      <h1>FAB</h1>
      <button class="mca-button--fab--regular">
        <i class="material-icons mca-icon">add</i>
      </button>
      <button class="mca-button--fab--dense">
        <i class="material-icons mca-icon--dense">add</i>
      </button>
      <button class="mca-button--fab--extend">
        <i class="material-icons mca-icon">add</i><!--
     --><span class="mca-button__label">CREATE</span>
      </button>
    </section>
  </article>
`);

storiesOf('Button', module)
  .add('Default Theme', () => renderHtml('default-button'))
  .add('Crane Theme', () => renderHtml('crane-button'))
  .add('Fortnightly Theme', () => renderHtml('fortnightly-button'))
  .add('Reply Theme', () => renderHtml('reply-button'))
  .add('Shrine Theme', () => renderHtml('shrine-button'));
