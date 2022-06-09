import { rest } from 'msw';
import { localUrl } from '../../../src/api/index';
import { trips } from './tripReq.handler';
// given

const search = {
  byName: 'demo',
  byEmail: '@',
  byDestination: 'Rubavu',
  byDuration: '1',
};

// eslint-disable-next-line import/prefer-default-export
export const searchHandlers = [
  rest.get(`${localUrl}api/v1/trip/search/byKey`, (req, res, ctx) => {
    return res(ctx.json({ trips }));
  }),
];
