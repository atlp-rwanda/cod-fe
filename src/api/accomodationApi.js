/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { localUrl, token } from '.';

const baseURl = localUrl;
const config = {
  headers: { Authorization: `Bearer ${token}` },
};
export const getAllAccomodations = () => {
    return new Promise(async (resolve, reject) => { //eslint-disable-line
    axios
      .get(`${baseURl}v1/accommodations`, config)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
