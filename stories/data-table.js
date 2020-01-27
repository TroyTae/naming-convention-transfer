import spaces from 'one-spaces';
import { storiesOf } from '@storybook/html';

import './index.scss';

storiesOf('Data Table', module)
  .add('Table', () => `
    <h1>Basic</h1>
    <table class="mca-data-table">
      <thead class="mca-data-table__head">
        <tr class="mca-data-table__head__row">
          <td class="mca-data-table__head__row__column">Title1</td>
          <td class="mca-data-table__head__row__column">Title2</td>
        </tr>
      </thead>
      <tbody class="mca-data-table__body">
        <tr class="mca-data-table__body__row">
          <td class="mca-data-table__body__row__column">Content1</td>
          <td class="mca-data-table__body__row__column">Content2</td>
        </tr>
        <tr class="mca-data-table__body__row">
          <td class="mca-data-table__body__row__column">Content3</td>
          <td class="mca-data-table__body__row__column">Content4</td>
        </tr>
      </tbody>
    </table>
  `);
