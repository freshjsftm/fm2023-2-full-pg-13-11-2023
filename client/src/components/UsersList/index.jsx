import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/usersSlice';

const UsersList = () => {
  const { users, error, isFetching } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers({ res: 2 })); // eslint-disable-next-line
  }, []);
  const mapUsers = (user) => <li key={user.login.uuid}>{user.email}</li>;
  return (
    <>
      {error && <p>{error}</p>}
      {isFetching && <p>Loading...</p>}
      {!error && !isFetching && <ul>{users.map(mapUsers)}</ul>}
    </>
  );
};

export default UsersList;
