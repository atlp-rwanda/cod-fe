/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';
import baseURl from '../../../src/api';

export const authHandlers = [
  rest.post(`${baseURl}api/user/register`, (req, res, ctx) => {
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
];
