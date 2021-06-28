import axios from 'axios';

const post = async (url, body = {}, params = {}, headers = {}) => {
  try {
    return {
      result: await axios.post(url, body, {
        headers,
        params,
      }),
      error: null,
    };
  } catch (err) {
    return {result: null, error: err};
  }
};

const put = async (url, body = {}, headers = {}) => {
  try {
    return {
      result: await axios.put(url, body, {
        headers,
      }),
      error: null,
    };
  } catch (err) {
    return {result: null, error: err};
  }
};

const get = async (url, params = {}, headers = {}) => {
  try {
    return {
      result: await axios.get(url, {
        headers,
        params,
      }),
      error: null,
    };
  } catch (err) {
    return {result: null, error: err};
  }
};

export default {
  post,
  put,
  get,
};
