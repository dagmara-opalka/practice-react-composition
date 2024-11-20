// TableFooter.js

import React from 'react';

const TableFooter = ({ total }) => (
  <tfoot>
    <tr>
      <td colSpan="3">Razem</td>
      <td>{total} PLN</td>
    </tr>
  </tfoot>
);

export default TableFooter;
