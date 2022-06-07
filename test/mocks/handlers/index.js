import { authHandlers } from './auth.handler';
import { approveHandlers } from './approve.handler';
import { tripReqHandlers } from './tripReq.handler';
import { editHandlers } from './editTrip.handler';
import { resetHandlers } from './reset.handler';

const handlers = [...authHandlers, ...approveHandlers, ...tripReqHandlers, ...editHandlers, ...resetHandlers];

export default handlers;
