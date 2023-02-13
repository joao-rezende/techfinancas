import React from 'react';
import { PencilIcon, TrashIcon } from '@primer/octicons-react'

import './style.css';

const Transaction = (props) => {
  const { transaction, handleEdit, handleDelete } = props;
  const { description, amount, date, type } = transaction;
  const nameType = type === 1 ? 'Receita' : 'Despesa';

  const numberFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <tr>
      <td className='text-center'><span className={`type-label type-${nameType.toLowerCase()}`}>{nameType}</span></td>
      <td>{description}</td>
      <td className='text-right'>{numberFormat.format(amount)}</td>
      <td>{date}</td>
      <td className='text-center'>
        <button onClick={() => handleEdit(transaction)} className="btn-link">
          <PencilIcon />
        </button>
        <button onClick={() => handleDelete(transaction)} className="btn-link">
          <TrashIcon />
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
