import axios from 'axios'
import { utilities } from '../mixins/utilities'
const axiosApi = axios.create({
    baseURL: utilities.getBaseApiUrl(),
    timeout: 60000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosApi;