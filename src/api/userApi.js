import axios from 'axios';
import regeneratorRuntime, { async } from 'regenerator-runtime'; //eslint-disable-line
import { localUrl } from '.';

const registerUser = (userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${localUrl}api/user/register`, userData)
      .then((registerRes) => resolve(registerRes.data))
      .catch((error) => {
        if (error.response.data !== undefined) {
          reject(error.response.data);
        }
        reject(error);
      });
  });
};

export const loginUser = (user) => {
  console.log(localUrl);
  return new Promise((resolve, reject) => {
    axios
      .post(`${localUrl}api/user/login`, user)
      .then((res) => {
        resolve(res.data);
        if (res.status === 200) {
          localStorage.setItem(
            'barefootNomad',
            JSON.stringify({ refreshToken: res.data.refreshToken })
          );
          sessionStorage.setItem('AccessToken', res.data.accessToken);
          sessionStorage.setItem('roleId', res.data.roleId);
        }
      })
      .catch((error) => {
        if (error.response.data !== undefined) {
          reject(error.response.data);
        }
        reject(error);
      });
  });
};

export const googleLoginUser = (token) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${authUrl}auth/google`, { token })
      .then((res) => {
        resolve(res.data);
        if (res.status === 200) {
          sessionStorage.setItem('AccessToken', res.data.data.accessToken);
          localStorage.setItem(
            'barefootNomad',
            JSON.stringify({ refreshToken: res.data.data.refreshToken })
          );
        }
      })
      .catch((error) => {
        if (error.response.data !== undefined) {
          reject(error.response.data);
        }
        reject(error);
      });
  });
};

export const facebookLoginUser = (user) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${authUrl}auth/facebook`, { user })
      .then(() => {
        resolve(res.data);
        if (res.status === 200) {
          sessionStorage.setItem('AccessToken', res.data.data.accessToken);
          localStorage.setItem(
            'barefootNomad',
            JSON.stringify({ refreshToken: res.data.data.refreshToken })
          );
        }
      })
      .catch((error) => {
        if (error.response.data !== undefined) {
          reject(error.response.data);
        }
        reject(error);
      });
  });
};

export default registerUser;
