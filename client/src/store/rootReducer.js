import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
import usersReducer from './usersSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  users: usersReducer,
  //tasks: tasksReducer,
  // loadData:{}
});

export default rootReducer;
