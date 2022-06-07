import { rest } from 'msw';
const baseURl = 'http://127.0.0.1:7000/';

const passwordToken = {
  status: 201,
  data: {
    Message: 'Password Reset Link Sent Successfully',
    emailToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Iml5YXJlbXllZkBnbWFpbC5jb20iLCJpZCI6Ijg3NTkxNzc2LTdjNzUtNGEyMi05M2ZlLWEzMzc3YzBiNzA4OCIsImlhdCI6MTY1NDUyOTMxOSwiZXhwIjoxNjU0NTMwMjE5fQ.0Nqyx5VYrPLk1xnOezEulpv2DCa7JGZrF-gNIuGy7zc',
  },
};
const resetResponse = {
  status: 200,
  data: {
    data: { message: 'Password Updated successfully' },
  },
};
const token = passwordToken.data.emailToken;
// eslint-disable-next-line import/prefer-default-export
export const resetHandlers = [
  rest.post(`${baseURl}api/v1/forgot-password`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(passwordToken), ctx.delay(100));
  }),
  rest.patch(`${baseURl}api/v1/reset-password`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(resetResponse), ctx.delay(200));
  }),
];
