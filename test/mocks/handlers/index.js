import { authHandlers } from './auth.handler';
import { approveHandlers } from './approve.handler';
import { tripReqHandlers } from './tripReq.handler';
import { resetHandlers } from './reset.handler';

const handlers = [...authHandlers, ...approveHandlers, ...tripReqHandlers, ...resetHandlers];

export default handlers;
