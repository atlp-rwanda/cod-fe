import axios from 'axios';
import { localUrl } from '.';

const baseURl = localUrl;

export const getProfile = (userId) => {
  const token = sessionStorage.getItem('AccessToken');
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
  const token = sessionStorage.getItem('AccessToken');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.patch(`${baseURl}v1/trip/approve_reject/${tripId}`, { status }, config);
    return res.data;
  } catch (error) {
    return error;
  }
};
export const editTripRequest = (tripId, data) => {
  const token = sessionStorage.getItem('AccessToken');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return new Promise((resolve, reject) => {
    axios
      .put(`${baseURl}v1/trip/${tripId}`, data, config)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
export const getTripComments = async (trip) => {
  const token = sessionStorage.getItem('AccessToken');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.get(`${baseURl}v1/trip/${trip}/comment`, config);
    return res.data.data.data;
  } catch (error) {
    return [];
  }
};
export const addTripComment = async (tripId, data) => {
  const token = sessionStorage.getItem('AccessToken');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.post(`${baseURl}v1/trip/${tripId}/comment`, data, config);
    if (res.status === 201) {
      return res.data.data.data;
    }
  } catch (error) {
    return [];
  }
};
export const removeTripComment = async (comment) => {
  const token = sessionStorage.getItem('AccessToken');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.delete(`${baseURl}v1/trip/comment/${comment}`, config);
    if (res.data.status === 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
export const allTrips = async () => {
  const token = sessionStorage.getItem('AccessToken');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.get(`${baseURl}v1/trip`, config);
    if (res.status === 200) {
      return res.data.data.data;
    }
  } catch (error) {
    return [];
  }
};
export const tripNotifications = () => {
  const token = sessionStorage.getItem('AccessToken');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURl}v1/notifications`, config)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
export const markAllAsRead = async () => {
  const token = sessionStorage.getItem('AccessToken');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.post(`${baseURl}v1/read/notifications`, {}, config);
    return res.data;
  } catch (error) {
    return error;
  }
};
export const markAsRead = async (id) => {
  const token = sessionStorage.getItem('AccessToken');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.post(`${baseURl}v1/read/notification/${id}`, {}, config);
    return res.data;
  } catch (error) {
    return error;
  }
};
