import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers, createUser, getOneUser } from '../api';

const USERS_SLICE_NAME = 'users';

export const getUsers = createAsyncThunk(
  `${USERS_SLICE_NAME}/getUsers`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await getAllUsers(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  `${USERS_SLICE_NAME}/addUser`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await createUser(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  `${USERS_SLICE_NAME}/getUser`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await getOneUser(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: {
    users: [],
    error: null,
    isFetching: false,
    userAuth: null,
    currentUser: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    builder.addCase(addUser.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.userAuth = action.payload;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    builder.addCase(getUser.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.currentUser = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
