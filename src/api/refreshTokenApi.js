import axios from 'axios';

const baseURl = 'https://z3a56d8ae-z32201c1c-gtw.z11b3bac6.rustrocks.cloud/';
const getToken = async () => {
  try {
    if (sessionStorage.getItem('AccessToken') === null) {
      if (localStorage.getItem('barefootNomad') === null) {
        return false;
      }
      const { refreshToken } = JSON.parse(window.localStorage.getItem('barefootNomad'));
      const tokenResponse = await axios.post(`${baseURl}api/user/refresh`, {
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
