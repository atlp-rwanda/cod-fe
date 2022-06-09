import axios from 'axios';
import regeneratorRuntime, { async } from 'regenerator-runtime'; //eslint-disable-line
import { localUrl, token } from '.';

const baseURl = localUrl;

export const searchByName = (keyword) => {
  return new Promise(async (resolve, reject) => {
    try {
      const searchNameRes = await axios.get(`${baseURl}api/v1/trip/search/byKey?name=${keyword}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      resolve(searchNameRes.data);
    } catch (error) {
      if (error.response.data !== undefined) {
        reject(error.response.data);
      }
      reject(error);
    }
  });
};

export const searchByEmail = (keyword) => {
  return new Promise(async (resolve, reject) => {
    //eslint-disable-line
    try {
      const searchEmailRes = await axios.get(
        `${baseURl}api/v1/trip/search/byKey?email=${keyword}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      resolve(searchEmailRes.data);
    } catch (error) {
      if (error.response.data !== undefined) {
        reject(error.response.data);
      }
      reject(error);
    }
  });
};

export const searchByDestination = (keyword) => {
  return new Promise(async (resolve, reject) => {
    try {
      const searchNameRes = await axios.get(
        `${baseURl}api/v1/trip/search/byKey?destination=${keyword}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      resolve(searchNameRes.data);
    } catch (error) {
      if (error.response.data !== undefined) {
        reject(error.response.data);
      }
      reject(error);
    }
  });
};

export const searchByDuration = (keyword) => {
  return new Promise(async (resolve, reject) => {
    try {
      const searchNameRes = await axios.get(
        `${baseURl}api/v1/trip/search/byKey?duration=${keyword}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      resolve(searchNameRes.data);
    } catch (error) {
      if (error.response.data !== undefined) {
        reject(error.response.data);
      }
      reject(error);
    }
  });
};
