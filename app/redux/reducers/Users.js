import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state, action) {
      state.users = [...state.users, ...action.payload.users];
    },
    deleteUsers(state, action) {
      state.users = [];
    },
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
