import axios from 'axios';
import regeneratorRuntime, { async } from 'regenerator-runtime'; //eslint-disable-line

const api = axios.create({
  baseURL: `http://127.0.0.1:7000/api`,
});

const registerUser = (userData) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      const registerRes = await api.post(`user/register`, userData);
      resolve(registerRes.data);
    } catch (error) {
      if (error.response.data !== undefined) {
        reject(error.response.data);
      }
      reject(error);
    }
  });
};

export const loginUser = (user) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      const res = await api.post(`user/login`, user);
      resolve(res.data);
      if (res.status === 200) {
        sessionStorage.setItem('AccessToken', res.data.accessToken);
        localStorage.setItem(
          'barefootNomad',
          JSON.stringify({ refreshToken: res.data.refreshToken })
        );
      }
    } catch (error) {
      if (error.response.data !== undefined) {
        reject(error.response.data);
      }
      reject(error);
    }
  });
};

export default registerUser;
