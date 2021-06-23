import http from './HttpServices';

/**
 * @param {array} fields - required user's field
 * @param {number} limit - no of users to be fetched
 *
 * @returns {object} response form the server
 */
const fetchUsers = async (limit, fields, nationalities) => {
  return await http.get('https://randomuser.me/api/', {
    ...(nationalities && {nat: nationalities.join(', ')}),
    inc: fields
      ? fields.join(', ')
      : `name, email, location, phone, cell, picture, login`,
    results: limit ? limit : 50,
  });
};

export default {
  fetchUsers,
};
