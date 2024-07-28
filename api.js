import axios from 'axios';
import appConfig from './config.js';

const api = axios.create({ baseURL: appConfig.EXTERNAL_API });

export default api;
