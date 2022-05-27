/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
import React, { useEffect, useState } from 'react';
import { getProfile, approveRequest, rejectRequest } from '../../api/tripApi';
import ProfileModal from '../ProfileModal';
import Alert from '../Auth/Alert';

function ApprovalComponent(props) {
  const { state } = props;
  const [hasProfile, setHasProfile] = useState(false);
  const [hasApproved, setHasApproved] = useState(false);
  const [hasRejected, setHasRejected] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [profile, setProfile] = useState({});
  const [modalOn, setModalOn] = useState(false);
  const [more, setMore] = useState(false);
  const [moreStyle, setMoreStyle] = useState({
    css: 'w-[75px] lg:w-[150px] sm:w-[100px] max-h-[60px] max-w-[150px] text-left justify-center',
    number: 40,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setProfileLoading(true);
        const response = await getProfile(state.User.id);
        if (response.message === 'Profile Found') {
          const { data } = response;
          setProfile(data);
          setHasProfile(true);
        } else {
          setHasProfile(false);
        }

        setProfileLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);
  const addStyle = () => {
    if (!more) {
      setMoreStyle({
        css: 'w-[150px] lg:w-[300px] sm:w-[200px] max-h-[120px] text-left justify-center',
        number: 1000,
      });
    } else {
      setMoreStyle({
        css: 'w-[75px] lg:w-[150px] sm:w-[100px] max-h-[60px] max-w-[150px] text-left justify-center',
        number: 40,
      });
    }
  };
  const { name: accomodationName } = state.Accomodation;
  const {
    departure,
    destination,
    dateOfTravel,
    dateOfReturn,
    createdAt,
    travelReason,
    status,
    id,
    User,
  } = state;
  const dateOfTravelString = new Date(dateOfTravel).toDateString();
  const dateOfReturnString = new Date(dateOfReturn).toDateString();
  const createdAtString = new Date(createdAt).toDateString();
  const viewProfile = () => {
    if (hasProfile) {
      setModalOn(true);
    } else {
      setError('This user has no profile');
    }
  };
  const approve = async () => {
    const res = await approveRequest(id);
    setHasApproved(true);
    setMessage(res.data.message);
  };
  const reject = async () => {
    const res = await rejectRequest(id);
    setHasRejected(true);
    setMessage(res.data.message);
  };
  return (
    <div className=" flex flex-col relative w-full sm:mx-8 md:mx-16 lg:mx-36 xl:mx-72 mt-6">
      {!hasProfile && User && error && <Alert message={error} heading="Error" variant="error" />}
      {(hasApproved || hasRejected) && User && message && (
        <Alert message={message} heading="Success" variant="success" />
      )}
      {User && (
        <div>
          <h1 className=" w-[70%] text-2xl lg:text-3xl bg-yellow-600 text-center font-semibold p-1 rounded-md mx-8 lg:ml-20 shadow-xl">
            Trip request Approval
          </h1>
          <h1 className="text-center text-xl p-2 font-medium mr-40 ml-20 lg:text-2xl">
            Requester Information
          </h1>
          <div className="flex flex-col ml-0 mr-40 sm:ml-12 sm:mr-36  lg:ml-20 lg:mr-44">
            <span className="flex flex-row justify-between p-2 border-y border-gray-200 bg-gray-50">
              <h2>Names:</h2>
              <h2>
                {User.firstname} ${User.lastname}
              </h2>
            </span>
            <button
              type="button"
              className="bg-yellow-600 w-40 mx-auto mt-4 rounded-md font-medium p-1 hover:bg-white hover:text-primary shadow-2xl"
              onClick={viewProfile}
            >
              View Profile
            </button>
          </div>
        </div>
      )}
      <h1 className="mr-40 ml-20 text-xl lg:text-2xl py-4 font-medium text-center">
        Trip Information
      </h1>
      <div className=" ml-12 mr-36  lg:ml-20 lg:mr-44">
        <span className="flex flex-row justify-between p-2 border-gray-200 bg-gray-50 border-y border-gray-200 bg-gray-50">
          <h2 className="">accomodation:</h2>
          <h2 className="w-[75px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {accomodationName}
          </h2>
        </span>
        <span className="flex flex-row justify-between p-2 border-y border-gray-200 bg-gray-50">
          <h2>Departure:</h2>
          <h2 className="w-[75px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {departure}
          </h2>
        </span>
        <span className="flex flex-row justify-between p-2 border-y border-gray-200 bg-gray-50">
          <h2>Destination:</h2>
          <h2 className="w-[75px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {String(destination)}
          </h2>
        </span>
        <span className="flex flex-row justify-between p-2 border-y border-gray-200 bg-gray-50">
          <h2>Status:</h2>
          <h2 className="w-[75px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {status}
          </h2>
        </span>

        <span className="flex flex-row justify-between p-2 border-y border-gray-200 bg-gray-50">
          <h2>Date of Travel:</h2>
          <h2 className="w-[75px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {dateOfTravelString}
          </h2>
        </span>
        <span className="flex flex-row justify-between p-2 border-y border-gray-200 bg-gray-50">
          <h2>Date of Return:</h2>
          <h2 className="w-[75px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {dateOfReturnString}
          </h2>
        </span>
        <span className="flex flex-row justify-between p-2 border-y border-gray-200 bg-gray-50">
          <h2>Date trip requested:</h2>
          <h2 className="w-[75px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {createdAtString}
          </h2>
        </span>
        <span className="flex flex-row justify-between p-2 border-y border-gray-200 bg-gray-50">
          <h2>Travel Reason:</h2>
          <h2 className={moreStyle.css}>
            <button
              type="button"
              onClick={() => {
                setMore(!more);
                addStyle();
              }}
            >
              {travelReason.length > moreStyle.number
                ? `${travelReason.slice(0, moreStyle.number)}...`
                : travelReason}{' '}
            </button>
          </h2>
        </span>
        {status === 'pending' && User && (
          <div className="flex flex-row items-center my-auto mx-auto w-72 lg:w-96">
            <button
              onClick={approve}
              data-testid="approve-button"
              type="button"
              className="w-28 bg-green-500 lg:w-40  mx-auto mt-4 rounded-md font-medium p-1 hover:bg-white hover:text-green-500 shadow-2xl"
            >
              Approve
            </button>
            <button
              onClick={reject}
              data-testid="reject-button"
              type="button"
              className="bg-red-500 w-28  lg:w-40 mx-auto mt-4 rounded-md font-medium p-1 hover:bg-white hover:text-red-500 "
            >
              Reject
            </button>
          </div>
        )}
      </div>
      {modalOn && !profileLoading && (
        <div className="bg-white ml-0 mr-20 h-full opacity-100 absolute inset-0 flex justify-center z-30">
          <ProfileModal data={profile} setModalOn={setModalOn} />
        </div>
      )}
    </div>
  );
}

export default ApprovalComponent;
