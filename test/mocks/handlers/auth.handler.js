import { rest } from 'msw';
import { localUrl } from '../../../src/api';

const baseURl = localUrl;

// eslint-disable-next-line import/prefer-default-export
export const authHandlers = [
  rest.post(`${baseURl}user/register`, (req, res, ctx) => {
    if (req.body.password.length < 8) {
      return res(
        ctx.status(400),
        ctx.json({
          Error:
            'Password:eight characters, at least one letter, one number and one special character',
          status: 400,
        }),
        ctx.delay(100)
      );
    }
    return res(ctx.status(201), ctx.json({ Message: 'User created', status: 201 }), ctx.delay(100));
  }),

  rest.post(`${baseURl}user/login`, (req, res, ctx) => {
    const { email } = req.body;
    if (email.includes('error')) {
      return res(ctx.status(500), ctx.json({ error: 'error', status: 500 }), ctx.delay(100));
    }
    if (email.includes('wrong')) {
      return res(
        ctx.status(400),
        ctx.json({ Error: 'This email does not exist', status: 400 }),
        ctx.delay(100)
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        accessToken: 'some-access-token',
        refreshToken: 'some-refresh-token',
        message: 'User logged in successfully',
        status: 200,
      }),
      ctx.delay(100)
    );
  }),
];
