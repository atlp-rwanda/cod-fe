/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { BiMessageAltError } from 'react-icons/bi';

function ConfirmationDialogue({ dialogueStatus, handleConfirm, handleCancel }) {
  let status;
  dialogueStatus !== ('approved' || 'rejected')
    ? (status = dialogueStatus)
    : dialogueStatus === 'approved'
    ? (status = 'approve')
    : (status = 'reject');

  return (
    <section
      data-testid="confirmDialogue_body"
      className="fixed w-full h-screen bg-black bg-opacity-20 left-0 top-0 grid place-items-center"
    >
      <section
        data-testid="confirmDialogue_box"
        className="w-[90%] md:w-3/5 lg:w-[30%] mx-auto h-max py-20 md:py-5 bg-white rounded grid place-items-center"
      >
        <BiMessageAltError
          data-testid="confirmDialogue_icon"
          className="w-24 h-20 text-[#edae07]"
        />
        <span
          data-testid="confirmDialogue_icon_text"
          className="font-bold text-3xl text-[#292929] capitalize my-5"
        >
          are you sure ?
        </span>
        <span
          data-testid="confirmDialogue_text"
          className="mb-5 capitalize"
        >{`Your are going to ${status} trip request`}</span>
        <section className="w-4/5 mx-auto flex justify-evenly items-center">
          <button
            data-testid="confirmDialogue_yes_btn"
            type="button"
            className="py-2 px-5 bg-green-500 rounded text-white font-medium"
            onClick={() => handleConfirm(dialogueStatus)}
          >
            Yes
          </button>
          <button
            data-testid="confirmDialogue_no_btn"
            type="button"
            className="py-2 px-5 bg-red-500 rounded text-white font-medium"
            onClick={() => handleCancel(false)}
          >
            No
          </button>
        </section>
      </section>
    </section>
  );
}

export default ConfirmationDialogue;
