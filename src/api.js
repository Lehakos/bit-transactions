import axios from 'axios';

import db from './db';

axios.defaults.baseURL = `${process.env.PUBLIC_URL}/mocks`;

// здесь, конечно же, должен быть post во многих методах, но т.к. нет сервера, просто цепляем json файл для иммитации ajax запроса

export const login = () => axios.get('/success.json');
export const logout = () => axios.get('/success.json');

export const getBanks = () => Promise.resolve({
  data: {
    success: true,
    banks: db.getBanks(),
  },
});

export const addTransaction = data => Promise.resolve({
  data: {
    success: true,
    transaction: db.addTransaction(data),
  },
});

export const deleteTransaction = id => {
  db.deleteTransaction(id);

  return Promise.resolve({
    data: {
      success: true,
    },
  })
};

export const getTransactions = () => Promise.resolve({
  data: {
    success: true,
    transactions: db.getTransactions(),
  },
});
