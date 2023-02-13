import TransactionsRepository from './TransactionRepository';

class TransactionsFakeRepository extends TransactionsRepository {
  transactions = [
    { id: 1, amount: 100, description: 'Salary', type: 1 },
    { id: 2, amount: 50, description: 'Shopping', type: 2 },
    { id: 3, amount: 20, description: 'Gas', type: 2 }
  ];

  async create(transaction) {
    this.transactions.push(transaction);
    return true;
  }

  async getAll() {
    return this.transactions;
  }

  async edit(id, transaction) { }

  async delete(id) { }
}

export default TransactionsFakeRepository;

