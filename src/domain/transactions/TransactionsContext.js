import { createContext } from 'react';
// import TransactionsFakeRepository from './repositories/TransactionsFakeRepository';
import TransactionsRemoteRepository from './repositories/TransactionsRemoteRepository';

export const TransactionsContext = createContext({
  repository: new TransactionsRemoteRepository()
});