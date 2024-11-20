import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data }) => (
  <tbody>
    {data.map(item => (
      <TableRow key={item.id} product={item} />
    ))}
  </tbody>
);

export default TableBody;
