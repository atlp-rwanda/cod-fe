import React from 'react';
import Row from './tables/shared/Row';

function ProfileModal(props) {
  const { data } = props;
  const { setModalOn } = props;
  const { gender, language, currency, birthdate, location, manager, department } = data;
  const birthdateString = new Date(birthdate).toDateString();
  const close = () => {
    setModalOn(false);
  };
  return (
    <div className=" mx-auto bg-white w-full lg:mx-16">
      <div className=" flex flex-col w-auto h-screen my-4">
        <h1 className="text-3xl bg-yellow-600 font-medium text-center font-semibold p-1 rounded-lg">
          Requester Profile
        </h1>
        <div className="flex flex-col">
          <Row>
            <h2>Gender:</h2>
            <h2 className="w-[130px] text-left">{gender}</h2>
          </Row>
          <Row>
            <h2>Language:</h2>
            <h2 className="w-[130px] text-left">{language}</h2>
          </Row>

          <Row>
            <h2>Currency:</h2>
            <h2 className="w-[130px] text-left">{currency}</h2>
          </Row>
          <Row>
            <h2>Date of Birth:</h2>
            <h2 className="w-[130px] text-left">{birthdateString}</h2>
          </Row>
          <Row>
            <h2>Location:</h2>
            <h2 className="w-[130px] text-left">{location}</h2>
          </Row>
          <Row>
            <h2>Manager:</h2>
            <h2 className="w-[130px] text-left">{manager || 'No manager'}</h2>
          </Row>
          <Row>
            <h2>Department:</h2>
            <h2 className="w-[130px] text-left">{department || 'No department'}</h2>
          </Row>
          <div className="flex items-center mx-auto w-96" />
          <button
            data-testid="close-button"
            type="button"
            onClick={close}
            className="bg-yellow-600 mt-4 w-40 p-1 mx-auto rounded-md hover:bg-yellow-500 hover:py-[.3rem] hover:text-base shadow-2xl"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
