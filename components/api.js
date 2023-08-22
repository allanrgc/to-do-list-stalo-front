import axios from 'axios';

const api = axios.create({
  baseURL: 'https://192.168.56.1:8000/api',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});

export default api;