import userServices from '../../api/UserServices';
import {addUsers} from '../reducers/Users';
const DEBUG_KEY = '[UserActions]';

export const getUsersData = () => async dispatch => {
  try {
    const {
      result: {data},
    } = await userServices.fetchUsers();
    dispatch(addUsers({users: data.results}));
  } catch (err) {
    console.log(`${DEBUG_KEY} Error while getting users data:`, err);
  }
};
