import {combineReducers} from 'redux';
import usersReducer from './Users';
import filterReducer from './Filter';

export default combineReducers({
  users: usersReducer,
  filterOptions: filterReducer,
});
