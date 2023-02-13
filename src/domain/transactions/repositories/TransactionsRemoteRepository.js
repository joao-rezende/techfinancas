import TransactionsRepository from './TransactionRepository';

class TransactionsRemoteRepository extends TransactionsRepository {
  async create(transaction) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    });


    console.log(response.ok)

    const data = await response.json();
    return data;
  }

  async getAll() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/transactions`);
    const data = await response.json();
    return data;
  }

  async edit(id, transaction) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/transactions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    });

    const data = await response.json();
    return data;
  }

  async delete(id) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/transactions/${id}`, { method: 'DELETE' });

    const data = await response.json();
    return data;
  }
}

export default TransactionsRemoteRepository;

