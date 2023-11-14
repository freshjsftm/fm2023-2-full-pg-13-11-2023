import axios from 'axios';
import qs from 'query-string';
import FormData from 'form-data';

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

// export const createUser = (values) => {
//   const formData = new FormData();
//   formData.append('firstName', values.firstName);
//   formData.append('lastName', values.lastName);
//   formData.append('email', values.email);
//   formData.append('password', values.password);
//   formData.append('birthday', values.birthday);
//   formData.append('isMale', values.isMale);
//   formData.append('avatar', values.avatar);
//   return httpClient.post('/users', formData, {
//     headers: { 'Content-Type': 'multipart/form-data' },
//   });
// };

export const createUser = (values) => {
  return httpClient.post('/users', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

//export const getOneUser = () => httpClient.get('/users/4');
//export const deleteUsers = () => httpClient.delete('/users/4');
//export const updateUsers = () => httpClient.patch('/users/4');
