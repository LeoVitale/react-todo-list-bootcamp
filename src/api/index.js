import axios from 'axios';

const BASE_URL = 'https://5e715c01667af7001631795a.mockapi.io/tasks';

export const getTasks = () => axios.get(BASE_URL);

export const postTask = task => axios.post(BASE_URL, task);

export const updateTask = task => axios.put(`${BASE_URL}/${task.id}`, task);

export const deleteTask = task => axios.delete(`${BASE_URL}/${task.id}`);
