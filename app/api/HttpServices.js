import axios from 'axios';

const post = async (url, body = {}, params = {}, headers = {}) => {
  let config = {
    headers: {
      ...headers,
    },
    params: {
      ...params,
    },
  };

  let returnValue;

  try {
    returnValue = {result: await axios.post(url, body, config), error: null};
  } catch (err) {
    returnValue = {result: null, error: err};
  }

  return returnValue;
};

const put = async (url, body = {}, headers = {}) => {
  let config = {
    headers: {
      ...headers,
    },
  };

  let returnValue;

  try {
    returnValue = {result: await axios.put(url, body, config), error: null};
  } catch (err) {
    returnValue = {result: null, error: err};
  }

  return returnValue;
};

const get = async (url, params = {}, headers = {}) => {
  let config = {
    headers: {
      ...headers,
    },
    params: {
      ...params,
    },
  };

  let returnValue;

  try {
    returnValue = {result: await axios.get(url, config), error: null};
  } catch (err) {
    returnValue = {result: null, error: err};
  }

  return returnValue;
};

export default {
  post,
  put,
  get,
};
