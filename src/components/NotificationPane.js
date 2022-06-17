/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { Fragment, useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { changePage } from '../redux/views/pages';
import { ToolTip } from './ToolTip';
import { tripNotifications, markAllAsRead, markAsRead } from '../api/tripApi';

function NotificationPane() {
  const navigate = useNavigate();
  const [toolTip, setToolTip] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationStatus, setNotificationStatus] = useState('all');
  const [marked, setMarked] = useState(false);
  const [unRead, setUnRead] = useState(0);

  useEffect(() => {
    const getNotifications = async () => {
      const notificationsRes = await tripNotifications();
      setNotifications(notificationsRes.data.data.reverse());
      setUnRead(notificationsRes.data.data.filter((notification) => !notification.isRead).length);
    };
    getNotifications();
  }, [marked]);

  const markNotifications = async () => {
    const markRes = await markAllAsRead();
    return markRes;
  };
  return (
    <Menu as="div" className="relative ml-3 z-50">
      <div>
        <Menu.Button
          data-testid="profile"
          className="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Open Notification pane</span>
          <span
            className="p-1 text-yellow-400 bg-gray-800 relative rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white"
            data-testid="notification-toggle"
          >
            {Boolean(unRead) && (
              <span className="absolute left-[50%] bottom-[50%] text-base text-white bg-red-500 px-1 rounded-md">
                {unRead}
              </span>
            )}
            <BellIcon className="w-6 h-6" aria-hidden="true" />
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" absolute top-[66%] left-[66%] transform -translate-x-[66%] md:top-[90%] md:left-[90%] md:transform md:-translate-x-[90%] mr-auto md:right-0 md:w-96 py-1 mt-2 origin-top-right bg-white rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none border-2 border-gray-300 shadow-2xl">
          <div className="border-b-2 py-2 border-gray-200">
            <div className="flex justify-between mx-4">
              <h1 className="text-2xl">Notifications</h1>
              <div className="relative flex space-x-4">
                <select
                  onChange={(e) => {
                    setNotificationStatus(e.target.value);
                  }}
                  className="border-2 border-yellow-500"
                >
                  <option value="all">All</option>
                  <option value="read">Read</option>
                  <option value="unread">UnRead</option>
                </select>
                <div className="hidden md:flex absolute right-[-50%] z-50 top-[-100%] transition ease-in-out duration-1000 text-center">
                  {toolTip && <ToolTip message="Mark all as Read" />}
                </div>
                <button
                  className=" border-2 border-gray-200 hover:bg-gray-100 hover:border-yellow-500 p-2"
                  type="button"
                  onMouseEnter={() => setToolTip(true)}
                  onMouseLeave={() => setToolTip(false)}
                  onClick={async () => {
                    const res = await markNotifications();
                    if (res.status === 200) {
                      setUnRead(0);
                      setMarked(true);
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 max-h-[460px] h-auto overflow-y-scroll">
            <div className="h-full">
              {notifications
                .sort((a, b) =>
                  a.createdAt < b.createdAt
                    ? 1
                    : a.createdAt === b.createdAt
                    ? a.isRead
                      ? 1
                      : -1
                    : -1
                )
                .filter((notification) => {
                  if (notificationStatus === 'read') {
                    return notification.isRead;
                  }
                  if (notificationStatus === 'unread') {
                    return !notification.isRead;
                  }
                  return notification;
                })
                .map((item) => (
                  <Menu.Item key={Math.random()}>
                    {() => (
                      <div
                        className={`border-b-2 border-gray-100 mx-1 ${!item.isRead && ' w-full'}`}
                      >
                        <div className="flex justify-between mx-4">
                          <div className="flex space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <h1 className="text-gray-500">{item.user || 'User'}</h1>
                          </div>
                          <h1 className="text-base text-gray-400">
                            {moment(item.createdAt).fromNow()}
                          </h1>
                        </div>
                        <div
                          type="button"
                          data-testid="user-profile"
                          className={`flex flex-col hover:bg-gray-100 w-full
                            p-4 text-sm text-gray-700 ${
                              !item.isRead && 'bg-blue-100 hover:bg-blue-200'
                            }`}
                        >
                          <button
                            type="button"
                            onClick={async () => {
                              await markAsRead(item.id);
                              navigate('/dashboard/comments');
                            }}
                            className="text-yellow-500 text-lg text-left hover:underline"
                          >
                            {item.title}
                          </button>
                          <p className="text-base text-left">{item.message}</p>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default NotificationPane;
