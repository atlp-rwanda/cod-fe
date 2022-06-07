import React from 'react';
import { SocketContext, socket } from '../../context/socket';

const Chat = () => {
  return (
    <SocketContext.Provider value={socket}>
      <div>Chat</div>
    </SocketContext.Provider>
  );
};

export default Chat;
