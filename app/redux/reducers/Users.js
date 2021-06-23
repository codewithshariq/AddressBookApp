import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state = action.payload.users;
      return state;
    },
    appendUsers: (state, action) => {
      state = [...state, ...action.payload.users];
      return state;
    },
  },
});

export const {setUsers, appendUsers} = usersSlice.actions;
export default usersSlice.reducer;
