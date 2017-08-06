let db;

try {
  db = JSON.parse(localStorage.getItem('db'));
} catch (err) {
  db = {
    transactions: {
      ind: 0,
      list: [],
    },
    banks: [
      {
        id: '1',
        name: 'Альфа Банк',
      },
      {
        id: '2',
        name: 'Сбербанк',
      },
      {
        id: '3',
        name: 'Тинькофф Банк',
      },
    ]
  };
}

function save() {
  localStorage.setItem('db', JSON.stringify(db));
}

export default {
  getTransactions() {
    return db.transactions.list;
  },

  getBanks() {
    return db.banks;
  },

  addTransaction(data) {
    data.id = String(db.transactions.ind++);
    db.transactions.list.unshift(data);

    save();

    return data;
  },

  deleteTransaction(id) {
    db.transactions.list = db.transactions.list.filter(transaction => transaction.id !== id);

    save();

    return db.transactions.list;
  }
}
