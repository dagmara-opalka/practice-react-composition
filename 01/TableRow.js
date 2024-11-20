import React from 'react';

const TableRow = ({ product }) => {
  const { name, price, quantity } = product;
  const totalPrice = price * quantity;

  return (
    <tr>
      <td>{name}</td>
      <td>{price} PLN</td>
      <td>{quantity}</td>
      <td>{totalPrice} PLN</td>
    </tr>
  );
};

export default TableRow;
