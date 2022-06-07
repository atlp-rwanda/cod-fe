import React, { useState, useContext, useCallback, useEffect } from 'react';
import { SocketContext } from '../../context/socket';

const Chat = ({ userId }) => {
  const socket = useContext(SocketContext);

  const [joined, setJoined] = useState(false);

  const handleInviteAccepted = useCallback(() => {
    setJoined(true);
  }, []);

  const handleJoinChat = useCallback(() => {
    socket.emit('SEND_JOIN_REQUEST');z
  }, []);

  useEffect(() => {
    // as soon as the component is mounted, do the following tasks:

    // emit USER_ONLINE event
    socket.emit('USER_ONLINE', userId);

    // subscribe to socket events
    socket.on('JOIN_REQUEST_ACCEPTED', handleInviteAccepted);

    return () => {
      // before the component is destroyed
      // unbind all event handlers used in this component
      socket.off('JOIN_REQUEST_ACCEPTED', handleInviteAccepted);
    };
  }, [socket, userId, handleInviteAccepted]);

  return (
    <div>
      {joined ? (
        <p>Click the button to send a request to join chat!</p>
      ) : (
        <p>Congratulations! You are accepted to join chat!</p>
      )}
      <button type="button" onClick={handleJoinChat}>
        Join Chat
      </button>
    </div>
  );
};

export default Chat;
