import React, { useState } from 'react';
import NewCommentForm from './NewCommentForm';
import { useSelector} from 'react-redux';
import '../../styles/custom.css';
import Dialog from './Dialog';
import { removeTripComment } from '../../api/tripApi';

export default function Messages({trip }) {
  const { loading,comments } = useSelector((state) => state.tripComments);
  const [messages, updateMessages] = useState(comments);
  const [dialogValue,setDialog]=useState(false);
  const [removeId, setRemove] = useState(0);
  const keys = Object.keys(messages);
  const newComments = (element) => {
    return element.id !== removeId;
  };

  const dialogConfirmation=async(commentId,confirm)=>{
    if(confirm==='yes'){
      const remove =await removeTripComment(commentId);
      if(remove){
        const newEl = [];
        const keys = Object.keys(messages);
        keys.forEach((element) => {
        newEl.push(messages[element]);
      });
      const filteredComments = newEl.filter(newComments);
      updateMessages(filteredComments);
      }
    }
    setDialog(false);
  }

  const removeComment = (commentId) => {
    setRemove(commentId);
    setDialog(true);
  };

  return (
    <div className="container flex flex-col w-full p-8 mt-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      {dialogValue && <Dialog comment={removeId} removeHandler={dialogConfirmation}/>}
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow trip-comments">
            <div className="comments">
              <nav>
                {keys.length > 0 && !dialogValue && !loading ? (
                  <ol className="messages">
                    {keys.map((key) => (
                      <li key={key}>
                        <button type='button'
                          onClick={() => removeComment(messages[key].id)}
                          style={{ color: '#D2691E', fontSize: '10px' }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                        <p style={{ textAlign:'justify' }}>{(parseInt(key)+1)}. {messages[key].comment}</p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <div></div>
                )}
              </nav>
            </div>
            {!loading && <div className="new-comment">
              <NewCommentForm tripId={trip} />
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}