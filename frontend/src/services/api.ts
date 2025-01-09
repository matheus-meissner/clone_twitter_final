// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://127.0.0.1:8000', // URL do backend
  baseURL: 'https://fernando10092.pythonanywhere.com/',
});

export const getData = async () => {
  const response = await api.get('/api/data/');
  return response.data;
};

export const postData = async (data: { name: string; msg: string }) => {
  const response = await api.post('/api/data/', data);
  return response.data;
};
