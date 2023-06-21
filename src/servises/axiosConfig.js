import axios from 'axios';
import { PROXY_URL } from 'helpers/constants';

const instance = axios.create({
  baseURL: `${PROXY_URL}https://dummyjson.com/comments`,
});

export default instance;
