import http from './HttpServices';

/**
 * @param {array} fields - required user's field
 * @param {number} limit - no of users to be fetched
 *
 * @returns {object} response form the server
 */
const fetchUsers = async (limit, fields) => {
  return await http.get('https://randomuser.me/api/', {
    inc: fields
      ? fields.join(', ')
      : `name, email, location, phone, cell, picture, login`,
    results: limit ? limit : 50,
  });
};

export default {
  fetchUsers,
};
