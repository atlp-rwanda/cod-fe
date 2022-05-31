import { authHandlers } from './auth.handler';
import { approveHandlers } from './approve.handler';
import { tripReqHandlers } from './tripReq.handler';
import { editHandlers } from './editTrip.handler';

const handlers = [...authHandlers, ...approveHandlers, ...tripReqHandlers, ...editHandlers];

export default handlers;
