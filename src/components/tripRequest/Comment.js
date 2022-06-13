import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getAllComments, postComment, deleteComment } from '../../api/commentApi';

function Comment() {
  const item = {
    user: 'Manager',
    createdAt: '01/01/2022',
  };
  const [newComment, setNewComment] = useState('');
  const [allComment, setAllComment] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const res = await getAllComments('372187d8-b85f-44f3-a939-701b190516b0');
      console.log(res);
      return res;
    };
    getComments();
  }, []);
  return (
    <div className="w-[70%] mx-auto">
      <h1 className="text-2xl text-yellow-500 my-4">Previous comment</h1>
      <div className="flex flex-col gap-4 items-start my-4 border-2 border-gray-200 hover:bg-gray-300">
        <div className="flex gap-72">
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
          <h1 className="text-base text-gray-400">{moment(item.createdAt).fromNow()}</h1>
        </div>
        <p>You have to add some data to get you trip approved</p>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-4 items-start my-4 border-2 border-gray-200 hover:bg-gray-300">
        <div className="flex gap-72">
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
          <h1 className="text-base text-gray-400">{moment(item.createdAt).fromNow()}</h1>
        </div>
        <p>You have to add some data to get you trip approved</p>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-4 items-start my-4 border-2 border-gray-200 hover:bg-gray-300">
        <div className="flex gap-72">
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
          <h1 className="text-base text-gray-400">{moment(item.createdAt).fromNow()}</h1>
        </div>
        <p>You have to add some data to get you trip approved</p>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
      <h1 className="text-yellow-500 text-xl">Add Your comment</h1>
      <form className="flex flex-col gap-4 items-start">
        <textarea
          rows={4}
          cols={60}
          className="rounded-md my-2 p-2 border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500"
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
        <button className="bg-green-500 px-4 rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Comment;
