import { rest } from 'msw';
import {localUrl} from '../../../src/api';

// eslint-disable-next-line import/prefer-default-export
export const editHandlers = [
  rest.get(`${localUrl}v1/accommodations`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        data: {
          accommodations: [
            {
              id: 1,
              name: 'SERENA',
              description: 'SERENA HOTEL',
              location: ['Kigali'],
              latitude: '-23421122',
              longitude: '-1232322',
              managerId: null,
              createdAt: '2022-05-12T09:51:07.767Z',
              updatedAt: '2022-05-12T09:51:07.767Z',
              createdBy: {
                firstname: 'Faustin',
                lastname: 'IYAREMYE',
              },
            },
            {
              id: 2,
              name: 'Silent Hill',
              description: 'This is a very silent hotel',
              location: ['Kayonza'],
              latitude: '234234',
              longitude: '234324',
              managerId: '4bfedd2c-3689-4827-8123-e4dc9470a916',
              createdAt: '2022-05-12T09:50:58.003Z',
              updatedAt: '2022-05-12T09:51:12.352Z',
              createdBy: {
                firstname: 'Alex Axel',
                lastname: 'Mucyo',
              },
            },
          ],
        },
      }),
      ctx.delay(100)
    );
  }),

  rest.put(`${localUrl}v1/trip/8b5c35f7-0459-4dae-8d61-a443dc5625b6`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        data: {
          message: 'Trip request updated successfully',
          data: null,
        },
      }),
      ctx.delay(100)
    );
  }),
];
