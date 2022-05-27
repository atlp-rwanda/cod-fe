import axios from 'axios';
import { localUrl } from '.';

const baseURl = localUrl;

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI2NmNmYzdjLWJlMmMtNDFmNS1iNDU5LWU4ODhiZmU4ODFhMSIsImVtYWlsIjoiZGVtb3VzZXJAY29kLmJlIiwiaWF0IjoxNjUzNDY4MzQwLCJleHAiOjE2NTM0NzE5NDB9.rgjCkNjBM7lX2N-ifIgzhrNzO7LFNKycIOahevesmQs';

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
