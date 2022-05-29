import axios from 'axios';
import { localUrl } from '.';

const baseURl = localUrl;

const token = sessionStorage.getItem('AccessToken');

const getAllTripReq = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURl}v1/trip`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => resolve(res.data.data))
      .catch((error) => reject(error));
  });
};

export { getAllTripReq };
