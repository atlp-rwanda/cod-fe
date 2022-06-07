import axios from 'axios';

const baseURl = 'https://z3a56d8ae-z32201c1c-gtw.z11b3bac6.rustrocks.cloud/';

export const api = axios.create({
  baseURL: `${baseURl}/api`,
});

export const localUrl = 'http://127.0.0.1:7000/api/';

// export const localUrl = 'https://z3a56d8ae-z32201c1c-gtw.z11b3bac6.rustrocks.cloud/api/';

export const token = sessionStorage.getItem('AccessToken');

export default baseURl;
