/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { localUrl, token } from '.';

const baseURl = localUrl;

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURl}api/users`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};

export const setNewRole = (userData) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${baseURl}api/v1/users/assignRole`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
