import { authHandlers } from './auth.handler';
import { approveHandlers } from './approve.handler';
import { tripReqHandlers } from './tripReq.handler';


const handlers = [...authHandlers, ...approveHandlers, ...tripReqHandlers];

export default handlers;
