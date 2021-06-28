import http from './HttpServices';
import {DEFAULT_FIELDS} from '../utils/constants';

/**
 * @param {array} fields - required user's field
 * @param {number} limit - no of users to be fetched
 *
 * @returns {object} response form the server
 */
const fetchUsers = async (
  nationalities,
  limit = 50,
  fields = DEFAULT_FIELDS,
) => {
  return http.get('https://randomuser.me/api/', {
    ...(nationalities && {nat: nationalities.join(', ')}),
    inc: fields.join(', '),
    results: limit,
  });
};

export default {
  fetchUsers,
};
