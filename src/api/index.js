import axios from 'axios';

const BASE_URL = '';

export const getTasks = function() {
  return axios.get(BASE_URL);
};

export const postTask = function(task = {}) {
  return axios.post(BASE_URL, task);
};
