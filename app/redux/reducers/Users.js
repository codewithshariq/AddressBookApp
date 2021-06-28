import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  data: {},
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.status = 'pending';
      return state;
    },
    setUsers: (state, action) => {
      state.status = 'resolved';
      state.data = action.payload.users;
      return state;
    },
    appendUsers: (state, action) => {
      state.status = 'resolved';
      state.data = [...state, ...action.payload.users];
      return state;
    },
    error: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload.error;
      return state;
    },
  },
});

export const {setUsers, appendUsers, error, getUsers} = usersSlice.actions;
export default usersSlice.reducer;
