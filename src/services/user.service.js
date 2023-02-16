import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://apis.yahoothemes.net/';

class UserService {
  getPublicContent() {

    return axios.get(API_URL);
  }
  getTypeMaintenance() {
    return axios
        .get(process.env.REACT_APP_API_SERVER + "v1/type_maintenance",  {
          headers: {access_token: 'access_token_2aed7b42814263bd626fb6579300b08ef798030f'}
        })
        .then(response => {
          return response.data;
        });
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

}
const userService = new UserService();
export default userService;
