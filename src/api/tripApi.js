import axios from 'axios';

import { localUrl } from '.';

const baseURl = localUrl;

const token = sessionStorage.getItem('AccessToken');
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const getProfile = (userId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURl}v1/user/profile/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
export const reviewRequest = async (tripId, status) => {
  try {
    const res = await axios.patch(`${baseURl}v1/trip/approve_reject/${tripId}`, { status }, config);
    return res.data;
  } catch (error) {
    return error;
  }
};
