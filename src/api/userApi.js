import axios from 'axios';
import regeneratorRuntime, { async } from 'regenerator-runtime'; //eslint-disable-line
import { localUrl } from '.';

const registerUser = (facilityData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${localUrl}user/register`, facilityData)
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
  return new Promise((resolve, reject) => {
    axios
      .post(`${localUrl}user/login`, user)
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
      .post(`${authUrl}google`, { token })
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
      .post(`${authUrl}facebook`, { user })
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
