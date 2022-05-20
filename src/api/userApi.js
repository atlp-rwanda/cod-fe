import axios from 'axios';
import regeneratorRuntime, { async } from 'regenerator-runtime'; //eslint-disable-line

const api = axios.create({
  baseURL: `https://cod-be-staging.herokuapp.com/api`,
});

const registerUser = (userData) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      const registerRes = await api.post(`user/register`, userData);
      resolve(registerRes.data);
    } catch (error) {
      if (error.response) {
        reject(error.response.data);
      }
      reject(error.message);
    }
  });
};

export default registerUser;
