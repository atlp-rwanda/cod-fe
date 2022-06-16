import axios from 'axios';

export const token = sessionStorage.getItem('AccessToken');
export const roleId = window.sessionStorage.getItem('roleId');

const baseURl = process.env.REACT_APP_DEPLOYED_URL;
export const localUrl = process.env.REACT_APP_LOCAL_URL;
export const authUrl = process.env.REACT_APP_AUTH_URL;

export const api = axios.create({
  baseURL: `${localUrl}`,
  headers: { Authorization: `Bearer ${token}` },
});

export default baseURl;
