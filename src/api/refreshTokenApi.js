import axios from 'axios';
import { localUrl } from '.';

const baseURl = localUrl;
const getToken = async () => {
  try {
    if (sessionStorage.getItem('AccessToken') === null) {
      if (localStorage.getItem('barefootNomad') === null) {
        return false;
      }
      const { refreshToken } = JSON.parse(window.localStorage.getItem('barefootNomad'));
      const tokenResponse = await axios.post(`${baseURl}user/refresh`, {
        refreshTokenKey: refreshToken,
      });

      sessionStorage.setItem('AccessToken', tokenResponse.data.accessToken);
      localStorage.setItem(
        'barefootNomad',
        JSON.stringify({ refreshToken: tokenResponse.data.refreshToken })
      );
      return true;
    }
    return true;
  } catch (errorResponse) {
    return false;
  }
};
export default getToken;
