import axios from 'axios';
import { localUrl, token } from '.';

const baseURl = localUrl;

const getAllTripReq = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURl}api/v1/trip`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => resolve(res.data.data))
      .catch((error) => reject(error));
  });
};

export { getAllTripReq };
