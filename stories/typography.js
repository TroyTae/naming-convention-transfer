import spaces from 'one-spaces';
import { storiesOf } from '@storybook/html';

import './index.scss';

storiesOf('Typography', module)
  .add('Type Scale', () => `
    <h1 class="${spaces('mca-typography', 'mca-typography--header1')}">Header1</h1>
    <h2 class="${spaces('mca-typography', 'mca-typography--header2')}">Header2</h2>
    <h3 class="${spaces('mca-typography', 'mca-typography--header3')}">Header3</h3>
    <h4 class="${spaces('mca-typography', 'mca-typography--header4')}">Header4</h4>
    <h5 class="${spaces('mca-typography', 'mca-typography--header5')}">Header5</h5>
    <h6 class="${spaces('mca-typography', 'mca-typography--header6')}">Header6</h6>
    <p class="${spaces('mca-typography', 'mca-typography--subtitle1')}">Subtitle1</p>
    <p class="${spaces('mca-typography', 'mca-typography--subtitle2')}">Subtitle2</p>
    <p class="${spaces('mca-typography', 'mca-typography--body1')}">Body1</p>
    <p class="${spaces('mca-typography', 'mca-typography--body2')}">Body2</p>
    <p class="${spaces('mca-typography', 'mca-typography--button')}">Button</p>
    <p class="${spaces('mca-typography', 'mca-typography--caption')}">Caption</p>
    <p class="${spaces('mca-typography', 'mca-typography--overline')}">Overline</p>
  `);