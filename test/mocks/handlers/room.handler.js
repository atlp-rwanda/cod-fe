import { rest } from 'msw';
import { localUrl } from '../../../src/api';

const baseURl = localUrl;
const successRes = {
  status: 200,
  data: {
    message: 'All available Rooms In Your Accomodation Retrieved Successfully',
    data: [
      {
        id: 'e86879aa-6fe7-433a-9071-3737f523daad',
        roomNumber: 30,
        images: ['dd2d7bad-6429-4370-893f-82bf4e6cad2c', 'dd2d7bad-6429-4370-893f-82bf4e6cad2c'],
        description: 'Fun Room For Vacation',
        status: 'available',
        accomodationId: 4,
      },
      {
        id: 'e86879aa-6fe7-433a-9071-3737f523daae',
        roomNumber: 13,
        images: ['dd2d7bad-6429-4370-893f-82bf4e6cad2c', 'dd2d7bad-6429-4370-893f-82bf4e6cad2c'],
        description: 'Fun Room For Vacation',
        status: 'available',
        accomodationId: 4,
      },
      {
        id: 'e86879aa-6fe7-433a-9071-3737f523daaf',
        roomNumber: 15,
        images: ['dd2d7bad-6429-4370-893f-82bf4e6cad2c', 'dd2d7bad-6429-4370-893f-82bf4e6cad2c'],
        description: 'Fun Room For Vacation',
        status: 'available',
        accomodationId: 4,
      },
    ],
  },
};
 const roomHandlers = [
  rest.get(`${baseURl}v1/rooms`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(successRes), ctx.delay(100));
  }),
];

export default roomHandlers;