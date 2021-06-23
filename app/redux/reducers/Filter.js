import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {dataCode: 'CH', countryName: 'Switzerland', selected: false},
  {dataCode: 'ES', countryName: 'Spain', selected: false},
  {dataCode: 'FR', countryName: 'France', selected: false},
  {dataCode: 'GB', countryName: 'United Kingdom', selected: false},
];

const filterSlice = createSlice({
  name: 'filterOptions',
  initialState,
  reducers: {
    setFilterOptions: (state, action) => {
      const index = state.findIndex(
        item => item.dataCode == action.payload.dataCode,
      );
      state[index].selected = !state[index].selected;
      return state;
    },
  },
});

export const {setFilterOptions} = filterSlice.actions;
export default filterSlice.reducer;
