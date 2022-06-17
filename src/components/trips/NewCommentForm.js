import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentsAction } from '../../redux/actions/comments.action'; 
import { addingComment } from '../../redux/features/tripComments.feature';

const NewCommentForm = ({ tripId }) => {
  const [loading, setStatus] = useState(false);
  const [comment, setComment] = useState({});
  const dispatch = useDispatch();
  const newComment = (e) => {
    e.preventDefault();
    setStatus(true);
    dispatch(addingComment());
    dispatch(commentsAction(tripId, comment));
  };

  const onChangeHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setComment((values) => ({ ...values, [name]: value }));
  };
  return (
    <div>
      {!loading ? (
        <form className="trip-comment-form" onSubmit={newComment}>
          <input
            type="text"
            placeholder="Message"
            className="w-full py-2 pl-4 mx-3 bg-gray-100 rounded-md outline-none focus:text-gray-700"
            name="comment"
            required
            onChange={onChangeHandler}
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
      ) : (
        <div>Adding Comment</div>
      )}
    </div>
  );
};

export default NewCommentForm;