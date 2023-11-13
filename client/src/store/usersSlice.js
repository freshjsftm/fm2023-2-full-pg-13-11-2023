import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers } from '../api';

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

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: {
    users: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
