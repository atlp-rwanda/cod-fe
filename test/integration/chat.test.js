import React from 'react';
import socketIOClient from 'socket.io-client';
import MockedSocket from 'socket.io-mock';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../jest.setup';
import Chat from '../../src/components/chat';

jest.mock('socket.io-client');

describe('Testing connection', () => {
  let socket;

  beforeEach(() => {
    socket = new MockedSocket();
    socketIOClient.mockReturnValue(socket);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should dispatch connect event', () => { 
    render(<Chat />)
    expect(socketIOClient.connect).toHaveBeenCalled();
  });

  it('should emit message:new', (done) => {
    socket.on('message:new', (data) => {
      expect(data).toEqual(['message1', 'message2']);
      done();
    });

    socket.socketClient.emit('message:new', ['message1', 'message2']);
  });
});
