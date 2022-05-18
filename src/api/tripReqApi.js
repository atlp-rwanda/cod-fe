import axios from 'axios';
import { localUrl } from '.';

const baseURl = localUrl;

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2MWQ3YzlkLWE4YTgtNDMwOC1iY2U4LTJjNmM2YTY2Yzg0MSIsImVtYWlsIjoibWFuYWdlcjFAY29kLmJlIiwiaWF0IjoxNjUzNjM5NjgyLCJleHAiOjE2NTM2NDMyODJ9.st_lY4q_utSNnIH7yXdDQIF_WBD59kZAQIcB9rd3azE';

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
