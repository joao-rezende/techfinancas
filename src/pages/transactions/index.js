import { useContext, useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import TransactionList from '../../components/TransactionList';
import TransactionForm from '../../components/TransactionForm';
import { TransactionsContext } from '../../domain/transactions/TransactionsContext';
import { TransactionsService } from '../../domain/transactions/TransactionsService';

import './style.css';

function Transactions() {
  const { repository } = useContext(TransactionsContext);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [transactions, setTransacitons] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const dateNow = new Date();
  const currentYear = dateNow.getFullYear();
  const [monthTransactions, setMonthTransactions] = useState(dateNow.getMonth());
  const [yearTransactions, setYearTransactions] = useState(currentYear);

  useEffect(() => {
    const fetchTransactions = async () => {
      const initialDate = new Date(yearTransactions, monthTransactions, 1);
      const finalDate = new Date(yearTransactions, monthTransactions + 1, 0);

      const filters = {
        initialDate: initialDate.toISOString().substring(0, 10),
        finalDate: finalDate.toISOString().substring(0, 10)
      }
      const resTransactions = await TransactionsService.getAll(repository, filters);

      let totalBalance = 0;
      let totalIncome = 0;
      let totalExpense = 0;

      resTransactions.forEach((transaction) => {
        if (transaction.type === 1) {
          totalBalance += parseFloat(transaction.amount);
          totalIncome += parseFloat(transaction.amount);
        } else {
          totalBalance -= parseFloat(transaction.amount);
          totalExpense += parseFloat(transaction.amount);
        }
      });

      setIncome(totalIncome);
      setBalance(totalBalance);
      setExpense(totalExpense);
      setTransacitons(resTransactions);
    }

    fetchTransactions();

    setRefresh(false);
  }, [yearTransactions, monthTransactions, repository, currentYear, refresh]);

  const numberFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const handleOpenTransactionModal = () => {
    setShowModal(true);
  };

  const handleCloseTransactionModal = () => {
    setEditTransaction({});
    setShowModal(false);
  };

  const handleEdit = (transaction) => {
    setEditTransaction(transaction);
    handleOpenTransactionModal();
  }

  const handleSubmit = async (transaction) => {
    if (editTransaction.id === undefined) {
      const added = await TransactionsService.create(repository, transaction);

      if (!added) {
        return alert("Não foi possível adicionar a transação");
      }
    } else {
      const edited = await TransactionsService.edit(repository, editTransaction.id, transaction);

      if (!edited) {
        return alert("Não foi possível editar a transação");
      }
    }

    setRefresh(true);
    handleCloseTransactionModal();
  }

  const confirmDelete = (transaction) => {
    setEditTransaction(transaction);
    setShowConfirmDelete(true);
  }

  const handleCloseConfirmDelete = () => {
    setEditTransaction({});
    setShowConfirmDelete(false);
  };

  async function handleDelete() {
    const deleted = await TransactionsService.delete(repository, editTransaction.id);

    if (!deleted) {
      return alert("Não foi possível excluir a transação");
    }

    setRefresh(true);
    handleCloseConfirmDelete();
  }

  return (
    <>
      <div className='content'>
        <div className='totalizers'>
          <div className='totalizer'>
            <span>Saldo</span>
            <span>{numberFormat.format(balance)}</span>
          </div>
          <div className='totalizer'>
            <span>Despesas</span>
            <span>{numberFormat.format(expense)}</span>
          </div>
          <div className='totalizer'>
            <span>Receitas</span>
            <span>{numberFormat.format(income)}</span>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='title'>
          <h2>Transações - <span>Agosto de {currentYear}</span></h2>
          <button className='btn-primary' onClick={handleOpenTransactionModal}>
            Nova transação
          </button>
        </div>
        <TransactionList transactions={transactions} handleEdit={handleEdit} handleDelete={confirmDelete} />
      </div>
      {
        showModal &&
        <Modal title="Criar uma nova transação" handleClose={handleCloseTransactionModal}>
          <TransactionForm transaction={editTransaction} onSubmit={handleSubmit} onCancel={handleCloseTransactionModal} />
        </Modal>
      }

      {
        showConfirmDelete &&
        <Modal title="Confirmar exclusão" handleClose={handleCloseConfirmDelete}>
          <p style={{ marginTop: 0 }}>Tem certeza que deseja excluir a transação <strong>{editTransaction.description}</strong> de <strong>{numberFormat.format(editTransaction.amount)}</strong>?</p>
          <hr />
          <div>
            <button type="button" className='btn-danger' onClick={handleCloseConfirmDelete}>Não</button>
            <button type="submit" className='btn-primary float-right' onClick={handleDelete}>Sim</button>
          </div>
        </Modal>
      }
    </>
  );
}

export default Transactions;
