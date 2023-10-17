import axios from 'axios';

const api = axios.create({
  baseURL: 'https://10.0.0.103:8000/api',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});

export default api;