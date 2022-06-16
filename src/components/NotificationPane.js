import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import { changePage } from '../redux/views/pages';
import { ToolTip } from './ToolTip';

function NotificationPane() {
  const [toolTip, setToolTip] = useState(false);
  const notifications = [
    {
      body: 'Trip was commented Trip was commented Trip was commented ',
      title: 'Comented on Trip commented Trip',
      user: 'Eric',
      type: 'comment',
      time: 'a day ago',
      href: '#',
    },
    {
      body: 'Trip were approved Trip was commented Trip was commented',
      title: 'Approved Trip',
      user: 'Patrick',
      type: 'comment',
      time: 'a day ago',
      href: '#',
    },
    {
      body: 'Trip was rejected Trip was commented Trip was commented',
      title: 'Rejected Trip',
      user: 'John',
      type: 'comment',
      time: 'a day ago',
      href: '#',
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
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
            <span className="absolute left-[50%] bottom-[50%] text-base text-white bg-red-500 px-1 rounded-md">
              5
            </span>
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
        <Menu.Items className="absolute right-0 w-96 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="border-b-2 py-2 border-gray-200">
            <div className="flex justify-between mx-4">
              <h1 className="text-2xl">Notifications</h1>
              <div className="relative flex space-x-4">
                <select className="hover:border-yellow-500 hover:bg-gray-100">
                  <option>All</option>
                  <option>Read</option>
                  <option>UnRead</option>
                </select>
                <div className="absolute right-[-50%] z-50 top-[-100%] transition ease-in-out duration-1000 text-center">
                  {toolTip && <ToolTip message="Mark all as Read" />}
                </div>
                <button
                  className=" border-2 border-gray-200 hover:bg-gray-100 p-2"
                  type="button"
                  onMouseEnter={() => setToolTip(true)}
                  onMouseLeave={() => setTimeout(setToolTip(false), 20000)}
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
          {notifications.map((item) => (
            <Menu.Item key={item.body}>
              {({ active }) => (
                <div className="border-b-2 py-2 border-gray-200">
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
                      <h1 className="text-gray-500">{item.user}</h1>
                    </div>
                    <h1 className="text-base text-gray-400">{item.time}</h1>
                  </div>
                  <button
                    type="button"
                    onFocus={() => setPage(item.type)}
                    onClick={() => dispatch(changePage(page))}
                    data-testid="user-profile"
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block text-sm text-gray-700 mx-4'
                    )}
                  >
                    <h1 className="hover:underline text-blue-300 text-lg text-left">
                      {item.title}
                    </h1>
                    <p className="text-base text-left">{item.body}</p>
                  </button>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default NotificationPane;
