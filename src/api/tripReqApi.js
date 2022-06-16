import axios from 'axios';
import { localUrl } from '.';

const baseURl = localUrl;

const getAllTripReq = () => {
  return new Promise((resolve, reject) => {
    const token = sessionStorage.getItem('AccessToken');
    axios
      .get(`${baseURl}v1/trip`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => resolve(res.data.data))
      .catch((error) => reject(error));
  });
};

export { getAllTripReq };
