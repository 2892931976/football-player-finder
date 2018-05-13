import axios from 'axios';
import { API_PATH } from '../config/paths';

class api {
  static async getAll() {
    const response = await axios.get(API_PATH);
    return response.data;
  }
}

export default api;
