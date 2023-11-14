import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../../store/usersSlice';
import CONSTANTS from '../../constants';

const UserProfile = () => {
  const { idUser } = useParams();
  const dispatch = useDispatch();
  const { error, isFetching, currentUser } = useSelector(
    (store) => store.users
  );
  useEffect(() => {
    dispatch(getUser(Number(idUser)));
  }, [idUser, dispatch]);
  return (
    <>
      {error && <p>{error}</p>}
      {isFetching && <p>Loading...</p>}
      {!error && !isFetching && currentUser && (
        <article>
          UserProfile id = {idUser} email: {currentUser.email}
          {currentUser.avatar && (
            <img
              src={`${CONSTANTS.IMAGE_PATH}/${currentUser.avatar}`}
              alt={currentUser.avatar}
            />
          )}
        </article>
      )}
    </>
  );
};

export default UserProfile;
