import React from 'react';
import TransactionRow from './TransactionRow';

const TransactionList = ({ transactions, handleEdit, handleDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Descrição</th>
        <th>Valor</th>
        <th>Data</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction, index) => (
        <TransactionRow key={index} transaction={transaction} handleEdit={handleEdit} handleDelete={handleDelete} />
      ))}
    </tbody>
  </table>
);

export default TransactionList;
