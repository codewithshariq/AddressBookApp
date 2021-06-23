import userServices from '../../api/UserServices';
import {setUsers, appendUsers} from '../reducers/Users';
const DEBUG_KEY = '[UserActions]';
import _ from 'lodash';

export const getUsersData =
  (searchParams = {}) =>
  async (dispatch, getState) => {
    const {filterOptions} = getState();

    let nationalities = filterOptions.filter(option => option.selected);
    nationalities = nationalities.map(nationality =>
      nationality.dataCode.toLowerCase(),
    );

    const contains = ({name, email}, query) => {
      const {first, last} = name;

      if (
        first.includes(query) ||
        last.includes(query) ||
        email.includes(query)
      ) {
        return true;
      }

      return false;
    };

    try {
      let {
        result: {
          data: {results: usersData},
        },
      } = await userServices.fetchUsers('', '', nationalities);

      if (searchParams.formattedQuery) {
        usersData = _.filter(usersData, user => {
          return contains(user, searchParams.formattedQuery);
        });
      }

      dispatch(setUsers({users: usersData}));
    } catch (err) {
      console.log(`${DEBUG_KEY} Error while getting users data:`, err);
    }
  };

export const appendUserData = () => async dispatch => {
  try {
    let {
      result: {
        data: {results: usersData},
      },
    } = await userServices.fetchUsers();
    dispatch(appendUsers({users: usersData}));
  } catch (err) {
    console.log(`${DEBUG_KEY} Error while getting users data:`, err);
  }
};
