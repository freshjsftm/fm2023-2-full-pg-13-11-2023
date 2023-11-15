import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers, createUser, getOneUser, deleteUser } from '../api';
import { pendingReducer, rejectReducer, decorateAsyncThunk } from './helpers';

const USERS_SLICE_NAME = 'users';

export const getUsers = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/getUsers`,
  thunk: getAllUsers,
});

export const addUser = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/addUser`,
  thunk: createUser,
});

export const getUser = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/getUser`,
  thunk: getOneUser,
});

export const delUser = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/delUser`,
  thunk: deleteUser,
});

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: {
    users: [],
    error: null,
    isFetching: false,
    userAuth: null,
    currentUser: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, pendingReducer);
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, rejectReducer);
    builder.addCase(addUser.pending, pendingReducer);
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.userAuth = action.payload;
    });
    builder.addCase(addUser.rejected, rejectReducer);
    builder.addCase(getUser.pending, pendingReducer);
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.currentUser = action.payload;
    });
    builder.addCase(getUser.rejected, rejectReducer);
    builder.addCase(delUser.pending, pendingReducer);
    builder.addCase(delUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(delUser.rejected, rejectReducer);
  },
});

export default usersSlice.reducer;
