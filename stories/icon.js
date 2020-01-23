import { storiesOf } from '@storybook/html';

import '../packages/index.scss';

storiesOf('Icon', module)
  .add('Material Icon', () => `
    <i class="material-icons mca-icon">grade</i>
    <i class="material-icons mca-icon mca-icon--dense">grade</i>
  `);
