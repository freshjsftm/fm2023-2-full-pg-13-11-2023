import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../../store/usersSlice';
import { getUserTasks } from '../../store/tasksSlice';
import CONSTANTS from '../../constants';

const UserProfile = () => {
  const { idUser } = useParams();
  const dispatch = useDispatch();

  const {
    error: usersError,
    isFetching: usersIsFetching,
    currentUser,
  } = useSelector((store) => store.users);
  const {
    error: tasksError,
    isFetching: tasksIsFetching,
    tasks,
  } = useSelector((store) => store.tasks);

  useEffect(() => {
    dispatch(getUser(Number(idUser)));
  }, [idUser, dispatch]);
  const handleShowTask = () => {
    dispatch(getUserTasks({ id: idUser }));
  };
  return (
    <>
      {usersError && <p>{usersError}</p>}
      {usersIsFetching && <p>Loading...</p>}
      {!usersError && !usersIsFetching && currentUser && (
        <article>
          <h2>
            UserProfile id = {idUser} email: {currentUser.email}
          </h2>
          {currentUser.avatar && (
            <div>
              <img
                width={100}
                src={`${CONSTANTS.IMAGE_PATH}/${currentUser.avatar}`}
                alt={currentUser.avatar}
              />
            </div>
          )}
          <section>
            <button onClick={handleShowTask}>show tasks</button>
            {tasksError && <p>{tasksError}</p>}
            {tasksIsFetching && <p>Loading...</p>}
            {!tasksError && !tasksIsFetching && (
              <ul>
                {tasks.map((task) => (
                  <li key={task.id}>{task.content}</li>
                ))}
              </ul>
            )}
          </section>
        </article>
      )}
    </>
  );
};

export default UserProfile;
