import userServices from '../../services/UserServices';
import {getUsers, setUsers, appendUsers, error} from '../reducers/Users';
const DEBUG_KEY = '[UserActions]';
import _ from 'lodash';

export const getUsersData =
  (searchParams = {}) =>
  async (dispatch, getState) => {
    dispatch(getUsers());
    const {filterOptions} = getState();

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
      } = await userServices.fetchUsers(getNationalities(filterOptions));

      if (searchParams.formattedQuery) {
        usersData = _.filter(usersData, user => {
          return contains(user, searchParams.formattedQuery);
        });
      }

      dispatch(setUsers({users: usersData}));
    } catch (err) {
      console.log(`${DEBUG_KEY} Error while getting users data:`, err);
      dispatch(error({error: err}));
    }
  };

export const appendUserData = () => async (dispatch, getState) => {
  dispatch(getUsers());
  const {filterOptions} = getState();

  try {
    const {
      result: {
        data: {results: usersData},
      },
    } = await userServices.fetchUsers(getNationalities(filterOptions));
    dispatch(appendUsers({users: usersData}));
  } catch (err) {
    console.log(`${DEBUG_KEY} Error while getting users data:`, err);
    dispatch(error({error: err}));
  }
};

const getNationalities = filterOptions => {
  let nationalities = filterOptions.filter(option => option.selected);
  return nationalities.map(nationality => nationality.dataCode.toLowerCase());
};
