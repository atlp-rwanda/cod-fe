import axios from 'axios';
import { localUrl} from '.';

const apiUrl = localUrl;
const checkEmail = async (emailId) => {
  try {
    const response = await axios.post(`${apiUrl}api/v1/forgot-password`, {
      email: `${emailId.email}`,
    });
    const resetToken = response.data.data.emailToken;
    return { resetToken };
  } catch (errorResponse) {
    if (errorResponse.response.data.Error) {
      return { status: true, message: errorResponse.response.data.Error };
    }
    return { status: true, message: 'An error occurred' };
  }
};

const changePassword = async (password, token) => {
  try {
    const response = await axios.patch(`${apiUrl}api/v1/reset-password?token=${token}`, password);
    if (response.data.data.message) {
      return { status: false, message: response.data.data.message };
    }
    return { status: true, message: 'Try again!' };
  } catch (errorResponse) {
    if (errorResponse.response.data.Error) {
      return { status: true, message: errorResponse.response.data.Error };
    }
    return { status: true, message: 'An error occurred!' };
  }
};

export { checkEmail, changePassword };
