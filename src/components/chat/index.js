import React from 'react';
import { SocketContext, getSocket } from '../../context/socket';
import Modal from './Modal';
// import io from 'socket.io-client';

const Chat = () => {
  return (
    <SocketContext.Provider value={getSocket()}>
      <div>
        <Modal />
      </div>
    </SocketContext.Provider>
  );
};

export default Chat;

// return (
//   <div>
//     <input />
//     <button onClick={sendMsg} type="button">
//       send
//     </button>
//   </div>
// );
