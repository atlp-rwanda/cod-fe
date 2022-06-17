/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getProfile, reviewRequest } from '../../api/tripApi';
import ProfileModal from '../ProfileModal';
import Alert from '../Auth/Alert';
import Spinner from '../reusable/Spinnar';
import Row from './shared/Row';
import ConfirmationDialogue from '../reusable/ConfirmationDialogue';

function ApprovalComponent(props) {
  const [hasProfile, setHasProfile] = useState(false);
  const [hasReviewed, setHasReviewed] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [profile, setProfile] = useState({});
  const [modalOn, setModalOn] = useState(false);
  const [more, setMore] = useState(false);
  const [managerConfirmation, setManagerConfirmation] = useState(false);
  const [dialogueStatus, setDialogueStatus] = useState('');
  const [moreStyle, setMoreStyle] = useState({
    css: 'w-[128px] lg:w-[150px] sm:w-[100px] max-h-[60px] max-w-[150px] text-left justify-center',
    number: 40,
  });
  const navigate = useNavigate();
  const { state } = props;
  const { name: accomodationName, id: accommodationId } = state.Accomodation;
  const {
    departure,
    destination,
    dateOfTravel,
    dateOfReturn,
    createdAt,
    travelReason,
    id,
    User,
    status,
  } = props.state;
  const [stat, setStat] = useState(status);
  const dateOfTravelString = new Date(dateOfTravel).toDateString();
  const dateOfReturnString = new Date(dateOfReturn).toDateString();
  const createdAtString = new Date(createdAt).toDateString();
  const fetchProfile = async () => {
    setProfileLoading(true);
    await getProfile(state.User.id)
      .then((response) => {
        if (response.message !== 'Profile Found') return setHasProfile(false);
        setProfile(response?.data);
        setHasProfile(true);
        return setProfileLoading(false);
      })
      .catch((err) => setError(err));
  };
  useEffect(() => {
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
        css: 'w-[128px] lg:w-[150px] sm:w-[100px] max-h-[60px] max-w-[150px] text-left justify-center',
        number: 40,
      });
    }
  };
  const viewProfile = () => {
    if (hasProfile) return setModalOn(true);
    setError('This user has no profile');
    return setTimeout(() => setError(''), 2000);
  };
  const approveOrReject = async (reviewStatus) => {
    setManagerConfirmation(false);
    setIsLoading(true);
    const handleSuccesResponse = (successMsg) => {
      setStat(reviewStatus);
      setHasReviewed(true);
      setMessage(successMsg);
      setIsLoading(false);
      return setTimeout(() => {
        setMessage('');
        navigate('/dashboard');
      }, 3000);
    };
    const handleFailResponse = (errMsg) => {
      setError(errMsg);
      return setIsLoading(false);
    };
    await reviewRequest(id, reviewStatus)
      .then((res) =>
        res.status === 200
          ? handleSuccesResponse(res?.data?.message)
          : handleFailResponse(res?.response?.data?.data?.message)
      )
      .catch((err) => handleFailResponse(err?.response?.data?.data?.message));
  };
  const handleRequest = (reqStatus) => {
    setDialogueStatus(reqStatus);
    return setManagerConfirmation(true);
  };
  return (
    <div className=" flex flex-col relative w-full sm:mx-8 md:mx-16 lg:mx-36 xl:mx-72 mt-6">
      {User && error && <Alert message={error} heading="Error" variant="error" />}
      {hasReviewed && User && message && (
        <Alert message={message} heading="Success" variant="success" />
      )}
      {User && (
        <div>
          <h1 className=" w-[70%] flex justify-center text-2xl lg:text-3xl bg-yellow-600 font-semibold p-1 rounded-md mx-8 lg:ml-20 shadow-xl">
            Trip request Approval
          </h1>
          <h1 className="p-2 ml-20 mr-40 text-xl font-medium text-center lg:text-2xl">
            Requester Information
          </h1>
          <div className="flex flex-col lg:ml-20 lg:mr-44">
            <Row>
              <h2>Names:</h2>
              <h2>
                {User.firstname} ${User.lastname}
              </h2>
            </Row>
            <div className="flex items-center my-auto mx-auto w-72 lg:w-96 mt-4">
          <Link
            to={`/dashboard/accommodation/${accommodationId}?tripId=${id}`}
            type="button"
            className="w-1/2 mr-4 text-center text-white  border border-solid border-[#FAB33F] rounded py-2 px-1 bg-[#FAB33F] hover:bg-white hover:text-[#DD8D0B] transition-colors duration-200"
          >
            View Rooms
          </Link>
          <button
              type="button"
              className="w-1/2 text-center text-[#DD8D0B]  border border-solid border-[#FAB33F] rounded py-2 px-1 hover:bg-[#FAB33F] hover:text-white transition-colors duration-200"
              onClick={viewProfile}
            >
              View Profile
            </button>
        </div>
          </div>
        </div>
      )}
      <h1 className="text-xl lg:text-2xl py-4 font-medium text-center">Trip Information</h1>
      <div className=" lg:ml-20 lg:mr-44">
        <span className="flex justify-between p-2 border-gray-200 bg-gray-50 border-y ">
          <h2 className="">accomodation:</h2>
          <h2 className="w-[128px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {accomodationName}
          </h2>
        </span>
        <Row>
          <h2>Departure:</h2>
          <h2 className="w-[128px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {departure}
          </h2>
        </Row>
        <Row>
          <h2>Destination:</h2>
          <h2 className="w-[128px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {String(destination).replace(/,/g, ' >> ')}
          </h2>
        </Row>
        <Row>
          <h2>Status:</h2>
          <div className="w-[128px] lg:w-[150px] sm:w-[100px] max-w-[150px] flex justify-left">
            <h2
              className={`rounded-md text-center px-1 ${
                (stat === 'approved' && 'bg-green-100 text-green-800') ||
                (stat === 'rejected' && 'bg-red-100 text-red-800') ||
                (stat === 'pending' && 'bg-gray-100 text-gray-800')
              }`}
            >
              {stat}
            </h2>
          </div>
        </Row>
        <Row>
          <h2>Date of Travel:</h2>
          <h2 className="w-[128px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {dateOfTravelString}
          </h2>
        </Row>
        <Row>
          <h2>Date of Return:</h2>
          <h2 className="w-[128px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {dateOfReturnString}
          </h2>
        </Row>
        <Row>
          <h2>Date trip requested:</h2>
          <h2 className="w-[128px] lg:w-[150px] sm:w-[100px] max-w-[150px] text-left justify-center">
            {createdAtString}
          </h2>
        </Row>
        <Row>
          <h2>Travel Reason:</h2>
          <h2 className={moreStyle.css}>
            <button
              type="button"
              data-testid="travel-reason"
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
        </Row>
        {isLoading ? (
          <Spinner />
        ) : (
          stat === 'pending' &&
          User && (
            <div className="flex items-center my-auto mx-auto w-72 lg:w-96">
              <button
                onClick={() => handleRequest('approved')}
                data-testid="approve-button"
                type="button"
                className="w-28 bg-green-500 lg:w-40  mx-auto mt-4 rounded-md font-medium p-1 hover:bg-green-400 hover:py-[.3rem] shadow-2xl"
              >
                Approve
              </button>
              <button
                onClick={() => handleRequest('rejected')}
                data-testid="reject-button"
                type="button"
                className="bg-red-500 w-28  lg:w-40 mx-auto mt-4 rounded-md font-medium p-1 hover:bg-red-400 hover:py-[.3rem] "
              >
                Reject
              </button>
            </div>
          )
        )}
      </div>
      {modalOn &&
        (profileLoading ? (
          <Spinner />
        ) : (
          <div className="bg-white px-8 md:px-48 h-full opacity-100 absolute inset-0 flex justify-center z-30">
            <ProfileModal data={profile} setModalOn={setModalOn} />
          </div>
        ))}
      {managerConfirmation ? (
        <ConfirmationDialogue
          dialogueStatus={dialogueStatus}
          handleConfirm={approveOrReject}
          handleCancel={setManagerConfirmation}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default ApprovalComponent;
