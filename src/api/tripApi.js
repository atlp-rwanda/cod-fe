import axios from 'axios';

import { localUrl } from '.';

const baseURl = localUrl;

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2MWQ3YzlkLWE4YTgtNDMwOC1iY2U4LTJjNmM2YTY2Yzg0MSIsImVtYWlsIjoibWFuYWdlcjFAY29kLmJlIiwiaWF0IjoxNjUzNjM5NjgyLCJleHAiOjE2NTM2NDMyODJ9.st_lY4q_utSNnIH7yXdDQIF_WBD59kZAQIcB9rd3azE';
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
export const approveRequest = (tripId) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${baseURl}v1/trip/approve_reject/${tripId}`, { status: 'approved' }, config)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};

export const rejectRequest = (tripId) => {
  return new Promise(async (resolve, reject) => {
    //eslint-disable-line
    axios
      .patch(`${baseURl}v1/trip/approve_reject/${tripId}`, { status: 'rejected' }, config)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
