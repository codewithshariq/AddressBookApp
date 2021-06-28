import {createSlice} from '@reduxjs/toolkit';
import {COUNTRY_LIST} from '../../utils/constants';

const filterSlice = createSlice({
  name: 'filterOptions',
  initialState: COUNTRY_LIST,
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
