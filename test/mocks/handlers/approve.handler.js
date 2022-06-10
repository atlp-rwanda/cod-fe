import { rest } from 'msw';
import { localUrl } from '../../../src/api';

const baseURl = localUrl;

const profile = {
  message: 'Profile Found',
  data: {
    id: 7,
    userId: '861d7c9d-a8a8-4308-bce8-2c6c6a66c847',
    gender: 'Male',
    language: 'English',
    currency: 'USD',
    location: 'Washington DC',
    departement: 'President',
    manager: 'none',
    birthdate: '1954-02-02T00:00:00.000Z',
    createdAt: '2022-06-20T15:10:19.503Z',
    updatedAt: '2022-06-20T15:10:19.503Z',
  },
};
const userId = '861d7c9d-a8a8-4308-bce8-2c6c6a66c847';
const userId2 = '861d7c9d-a8a8-4308-bce8-2c6c6a66c840';

// eslint-disable-next-line import/prefer-default-export
export const approveHandlers = [
  rest.get(`${baseURl}v1/user/profile/${userId}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(profile), ctx.delay(100));
  }),
  rest.get(`${baseURl}v1/user/profile/${userId2}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ ...profile, message: 'not found', data: {} }),
      ctx.delay(100)
    );
  }),
  rest.patch(
    `${baseURl}v1/trip/approve_reject/8b5c35f7-0459-4dae-8d61-a443dc5625b6`,
    (req, res, ctx) => {
      if (req.body.status === 'approved') {
        return res(
          ctx.status(200),
          ctx.json({ data: { data: { message: 'approved' } } }),
          ctx.delay(1000)
        );
      }
      return res(
        ctx.status(200),
        ctx.json({ data: { data: { message: 'rejected' } } }),
        ctx.delay(1000)
      );
    }
  ),
];
