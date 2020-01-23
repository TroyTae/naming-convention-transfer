import { storiesOf } from '@storybook/html';

import '../../packages/button/button.scss';

storiesOf('Icon', module)
  .add('Material Icon', () => `
    <i class="material-icons mca-icon">grade</i>
    <i class="material-icons mca-icon--dense">grade</i>
  `);
