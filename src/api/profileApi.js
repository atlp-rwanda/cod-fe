/* eslint-disable camelcase */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { localUrl } from '.';

const baseURl = localUrl;

const getUserProfile = async () => {
  try {
    const currentToken = sessionStorage.getItem('AccessToken');
    const decode = jwt_decode(currentToken);
    const response = await axios.get(`${baseURl}api/v1/user/profile/${decode.id}`, {
      headers: {
        authorization: `Bearer ${currentToken}`,
      },
    });
    return response.data.data;
  } catch (errorCatch) {
    return {};
  }
};

const updateUserProfile = async (postData) => {
  try {
    const currentToken = sessionStorage.getItem('AccessToken');
    const decode = jwt_decode(currentToken);
    const response = await axios.put(`${baseURl}api/v1/user/profile/${decode.id}`, postData, {
      headers: {
        authorization: `Bearer ${currentToken}`,
      },
    });
    if (response.data.status === 200) {
      return { status: true, message: response.data.data.Message };
    }
    return { status: false, message: 'An error occured,try again!' };
  } catch (errorResponse) {
    if (errorResponse.response.data.Error) {
      return { status: false, message: errorResponse.response.data.Error };
    }
    return { status: false, message: 'ERROR' };
  }
};

export { getUserProfile, updateUserProfile };
