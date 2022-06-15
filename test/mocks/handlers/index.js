import { authHandlers } from './auth.handler';
import { approveHandlers } from './approve.handler';
import { tripReqHandlers } from './tripReq.handler';
import { editHandlers } from './editTrip.handler';
import { resetHandlers } from './reset.handler';
import { searchHandlers } from './search.handler';
import roomHandlers from './room.handler';

const handlers = [
  ...authHandlers,
  ...approveHandlers,
  ...tripReqHandlers,
  ...editHandlers,
  ...resetHandlers,
  ...searchHandlers,
  ...roomHandlers,
];

export default handlers;
