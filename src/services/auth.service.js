import axios from "axios";

const API_URL = "http://103.11.199.96:8069/api/";

class AuthService {
  login(username, password) {
    return axios
      .post(process.env.REACT_APP_API_SERVER + "auth/token", {
        action:"login",

      }, {
        headers: {
          login: username,
          password: password,
          db: 'HRM',
        }
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
