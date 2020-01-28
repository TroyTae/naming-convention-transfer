import spaces from 'one-spaces';
import { storiesOf } from '@storybook/html';

import './index.scss';

storiesOf('App Bar', module)
  .add('Top App Bar', () => `
    <div class="${spaces('mca-app-bar', 'mca-app-bar--top')}">
      <i class="${spaces('material-icons', 'mca-icon')}">menu</i>
      <span>Page title</span>
    </div>
  `)
  .add('Bottom App Bar', () => `
    <div class="${spaces('mca-app-bar', 'mca-app-bar--bottom')}">
      <i class="${spaces('material-icons', 'mca-icon')}">menu</i>
      <span>Page title</span>
    </div>
  `);
