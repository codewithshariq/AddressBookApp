import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state = [...state, ...action.payload.users];
      return state;
    },
    updateData: (state, action) => {
      state = action.payload.users;
      console.log('This is state', state);
      return state;
    },
    deleteUsers: (state, action) => {},
  },
});

export const {addUsers, deleteUsers, updateData} = usersSlice.actions;
export default usersSlice.reducer;
