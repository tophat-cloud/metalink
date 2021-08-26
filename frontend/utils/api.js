import axios from 'axios';
import { baseURL } from './constant';

export default axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {'Content-Type': 'application/json'},
});
