import React, { useState, useContext, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { UserIcon } from '@heroicons/react/outline';
import 'react-chat-elements/dist/main.css';
import { ChatItem } from 'react-chat-elements';
import { SocketContext } from '../../context/socket';
import Message from './Message';
import Users from './Users';

const Messages = ({ userId }) => {
  const socket = useContext(SocketContext);
  const { email } = useSelector((state) => state.user.user);
  const [allMessages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState([]);
  const [names, setNames] = useState([]);
  const [inputMsg, setInputMsg] = useState('');
  const [txt, setTxt] = useState('');

  const inputRef = useRef(null);

  const handleJoinChat = useCallback(() => {
    socket.emit('joinRoom', { room: 'barefoot', email });
  }, []);

  const handleMessage = useCallback((message) => {
    socket.on('message', ({ room, message, firstname, createdAt }) => {
      setMsg((current) => [...current, message]);
      setNames((current) => [...current, firstname]);
    });
  }, []);

  const getAllMessages = useCallback(() => {
    socket.on('messages', (messages) => {
      setMessages(messages);
    });
  }, []);

  useEffect(() => {
    handleJoinChat();
    getAllMessages();
    handleMessage();
    inputRef.current.focus();

    socket.on('roomUsers', ({ room, users }) => {
      setUsers(users);
    });
  }, [socket, userId]);

  return (
    <div className="container mx-auto">
      <div className="max-w-2xl border rounded  overflow-visible">
        <div>
          <div className="w-full ">
            <div className="flex">
              {users && users.map((u) => <Users firstname={u.firstname} />)}
            </div>

            <div className="">
              <ul className="space-y-2">
                {allMessages.map((element) => {
                  const { message, createdAt, User } = element;
                  return (
                    // <Message createdAt={createdAt} message={message} firstname={User.firstname} />
                    <ChatItem
                      avatar={<UserIcon />}
                      alt=""
                      title={User.firstname}
                      subtitle={message}
                      date={new Date(createdAt)}
                      unread={0}
                    />
                  );
                })}
                {/* {msg && msg.map((m, i) => <Message message={m} firstname={names[i]} />)} */}
                {msg &&
                  msg.map((m, i) => (
                    <ChatItem
                      avatar={<UserIcon />}
                      alt=""
                      title={names[i]}
                      subtitle={m}
                      date={new Date()}
                      unread={0}
                    />
                  ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                socket.emit('chatMessage', inputMsg);
                e.preventDefault();
                setTxt('');
              }}
              className="flex items-center justify-between w-full p-3 border-t border-gray-300"
            >
              <input
                type="text"
                placeholder="Message"
                className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                name="message"
                onChange={(e) => {
                  setInputMsg(e.target.value);
                  setTxt(e.target.value);
                }}
                ref={inputRef}
                value={txt}
                required
              />

              <button type="submit">
                <svg
                  className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
