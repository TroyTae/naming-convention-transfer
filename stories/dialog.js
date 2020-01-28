import { storiesOf } from '@storybook/html';

import './index.scss';

storiesOf('Dialog', module)
  .add('Simple Dialog', () => `
    <div class="mca-dialog">
      <div class="mca-dialog__container">
        <h1>Title</h1>
        <span>Some contents in here!</span>
      </div>
    </div>
  `);
