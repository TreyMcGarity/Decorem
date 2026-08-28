import axios from 'axios';
import { API_BASE_URL } from '../config';

axios.defaults.withCredentials = true;
const axiosWithCred = (axios.create({
    baseURL: API_BASE_URL,
}));

export default axiosWithCred;