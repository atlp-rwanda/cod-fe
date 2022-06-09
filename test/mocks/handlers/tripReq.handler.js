/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';
import { localUrl } from '../../../src/api/index';
// given
export const trips = [
  {
    Accomodation: { name: 'Serena' },
    destination: 'Kigali',
    dateOfReturn: '6 July 2022',
    status: 'approved',
    imgUrl: 'https://flyclipart.com/thumb2/profile-icon-png-black-196391.png',
  },
  {
    Accomodation: { name: 'Kivu' },
    destination: 'Kigali',
    dateOfReturn: '6 July 2022',
    status: 'rejected',
    imgUrl: 'https://flyclipart.com/thumb2/profile-icon-png-black-196391.png',
  },
];

export const tripReqHandlers = [
  rest.get(`${localUrl}api/v1/trip`, (req, res, ctx) => {
    return res(ctx.json({ trips }));
  }),
];
