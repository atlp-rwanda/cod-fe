import { authHandlers } from './auth.handler';
import { tripReqHandlers } from './tripReq.handler';

const handlers = [...authHandlers, ...tripReqHandlers];

export default handlers;
