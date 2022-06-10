import React from 'react';
import socketio from 'socket.io-client';
import baseUrl, { token } from '../api';

export const getSocket = () => {
  if (token) {
    return socketio.connect(baseUrl, {
      auth: { token },
    });
  }
  return socketio.connect(baseUrl);
};

export const SocketContext = React.createContext();
