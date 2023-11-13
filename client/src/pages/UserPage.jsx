import React from 'react';
import UsersList from '../components/UsersList';
import UserForm from '../components/UserForm';

const UserPage = () => {
  return (
    <main>
      <h1>Users List</h1>
      <UserForm />
      <UsersList />
    </main>
  );
}

export default UserPage;
