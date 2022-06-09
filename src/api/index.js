const baseURl = process.env.REACT_APP_DEPLOYED_URL;
export const localUrl = process.env.REACT_APP_VERCEL_URL;
export const token = sessionStorage.getItem('AccessToken');
export default baseURl;
