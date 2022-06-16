import axios from 'axios';
import { localUrl } from '.';

const baseURl = localUrl;

const getAllComments = (id) => {
  return new Promise((resolve, reject) => {
    const token = sessionStorage.getItem('AccessToken');
    axios
      .get(`${baseURl}v1/trip/${id}/comment`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => resolve(res.data.data))
      .catch((error) => reject(error));
  });
};
const postComment = (tripId) => {
  return new Promise((resolve, reject) => {
    const token = sessionStorage.getItem('AccessToken');
    axios
      .post(`${baseURl}v1/trip/${tripId}/comment`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => resolve(res.data.data))
      .catch((error) => reject(error));
  });
};
const deleteComment = (id) => {
  return new Promise((resolve, reject) => {
    const token = sessionStorage.getItem('AccessToken');
    axios
      .delete(`${baseURl}v1/trip/comment/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => resolve(res.data.data))
      .catch((error) => reject(error));
  });
};

export { getAllComments, postComment, deleteComment };
