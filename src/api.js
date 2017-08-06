import axios from 'axios';

axios.defaults.baseURL = `${process.env.PUBLIC_URL}/mocks`;

const authRequest = {
  headers: {
      authorization: localStorage.getItem('token'),
  },
};

// здесь, конечно же, должен быть post, но т.к. нет сервера, просто цепляем json файл для иммитации ajax запроса
export const login = () => axios.get('/success.json');
export const logout = () => axios.get('/success.json');
