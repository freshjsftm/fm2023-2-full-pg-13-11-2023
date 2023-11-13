import axios from 'axios';
import qs from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// export const getHome = () => httpClient.get('/');

export const getAllUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    amount: 5,
  };
  const finallyOptions = {
    ...defaultOptions,
    ...options,
  };
  return httpClient.get(`/users?${qs.stringify(finallyOptions)}`);
};

export const createUser = (values) => httpClient.post('/users', values);
//export const getOneUser = () => httpClient.get('/users/4');
//export const deleteUsers = () => httpClient.delete('/users/4');
//export const updateUsers = () => httpClient.patch('/users/4');
