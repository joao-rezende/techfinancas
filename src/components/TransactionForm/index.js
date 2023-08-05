import React, { useState } from 'react';
import Input from '../Fields/Input';
import Select from '../Fields/Select';

import './style.css';

const TransactionForm = ({ transaction, onSubmit, onCancel }) => {
  const [description, setDescription] = useState(transaction.description ?? '');
  const [amount, setAmount] = useState(transaction.amount ?? 0);
  const [date, setDate] = useState(transaction.date ? transaction.date.substring(0, 10) : '');
  const [type, setType] = useState(transaction.type ?? 2);

  const resetForm = () => {
    setDescription('');
    setAmount(0);
    setDate('');
    setType(2);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateTransaction = new Date(date);
    const dataAtual = new Date();
    const completed = dataAtual >= dateTransaction;

    onSubmit({ description, amount, date, type, completed });
    resetForm();
  }

  function handleCancel() {
    onCancel();
    resetForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Select text="Tipo" value={type} setValue={setType} options={[
        { value: 1, text: 'Receita' },
        { value: 2, text: 'Despesa' },
      ]} />
      <Input text="Descrição" type="text" value={description} setValue={setDescription} />
      <Input text="Valor" type="number" value={amount} setValue={setAmount} />
      <Input text="Data" type="date" value={date} setValue={setDate} />
      <hr />
      <div>
        <button type="submit" className='btn-primary'>Salvar</button>
        <button type="button" className='btn-danger float-right' onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  );
}

export default TransactionForm;
