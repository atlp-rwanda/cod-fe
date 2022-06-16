/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllAccomodations } from '../../api/accomodationApi';
import Alert from '../Auth/Alert';
import editTrip from '../../redux/actions/editTrip.action';
import { buttonDisabled, buttonEnabled } from '../../redux/features/editTrip.feature';
import EditButton from './EditButton';
import EditInput from './EditInput';
import ConfirmationDialogue from '../reusable/ConfirmationDialogue';

function EditRequest(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = props;
  const [accomodations, setAccomodations] = useState([]);
  const accomodation = state?.Accomodation;
  const { departure, destination, dateOfTravel, dateOfReturn, travelReason, id } = state;
  const dateOfReturnString = new Date(dateOfReturn).toISOString().substr(0, 10);
  const dateOfTravelString = new Date(dateOfTravel).toISOString().substr(0, 10);
  const [accomodationIdState, setAccomodationIdState] = useState(accomodation?.id);
  const [departureState, setDepartureState] = useState(departure);
  const [destinationState, setDestinationState] = useState(destination);
  const [dateOfTravelState, setDateOfTravelState] = useState(dateOfTravelString);
  const [dateOfReturnState, setDateOfReturnState] = useState(dateOfReturnString);
  const [travelReasonState, setTravelReasonState] = useState(travelReason);
  const [checkState, setCheckState] = useState(false);
  const [userConfirmation, setUserConfirmation] = useState(false);
  const [dialogueStatus, setDialogueStatus] = useState('');

  const editStates = useSelector((status) => status.edit);
  const getAccomodations = async () => {
    const AllAccomodations = await getAllAccomodations();
    return setAccomodations(AllAccomodations);
  };

  useEffect(() => {
    getAccomodations(accomodations);
  }, []);
  useEffect(() => {
    const editState =
      accomodationIdState.toString() !== (accomodation?.id).toString() ||
      (departureState !== '' && departureState !== departure) ||
      (destinationState !== '' && destinationState !== destination) ||
      (dateOfTravelState !== '' && dateOfTravelState !== dateOfTravelString) ||
      (dateOfReturnState !== '' && dateOfReturnState !== dateOfReturnString) ||
      (travelReasonState !== '' && travelReasonState !== travelReason);
    if (editState) dispatch(buttonEnabled());
    else dispatch(buttonDisabled());
  }, [
    accomodationIdState,
    departureState,
    destinationState,
    dateOfReturnState,
    dateOfTravelState,
    travelReasonState,
  ]);
  const editFunction = async () => {
    const tripId = id;
    const data = {
      departure: departureState,
      destination: destinationState,
      dateOfTravel: dateOfTravelState,
      dateOfReturn: dateOfReturnState,
      accomodationId: accomodationIdState,
      travelReason: travelReasonState,
      saveInfo: checkState,
    };
    dispatch(editTrip(tripId, data));
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };
  return (
    <div className="flex flex-col w-screen md:ml-32 mt-6">
      <div className="w-[400px] mx-auto">
        {editStates.error && <Alert message={editStates.error} heading="Error" variant="error" />}
        {editStates.message && (
          <Alert message={editStates.message} heading="Success" variant="success" />
        )}
      </div>

      <h1 className="bg-yellow-500 rounded-md text-center w-64 mb-4 md:text-3xl md:w-96 mx-auto py-1">
        Modify Trip Request
      </h1>
      <div className="border border-gray-50 shadow-md px-12 mx-auto">
        <div className="md:grid gap-x-[120px] grid-cols-2">
          <div className="md:col-span-2 my-1">
            <div className="flex flex-col">
              <label htmlFor="accomodation">Accomodation</label>
              <select
                data-testid="accomodation"
                value={accomodationIdState}
                onChange={(e) => {
                  setAccomodationIdState(e.target.value);
                }}
                id="accomodation"
                className="w-64 rounded-md my-2 p-2 border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500"
              >
                {accomodations?.data?.accommodations?.length ? (
                  accomodations.data.accommodations.map((accom) => (
                    <option value={accom?.id}>{accom?.name}</option>
                  ))
                ) : (
                  <option>No Accomodation</option>
                )}
              </select>
            </div>
          </div>

          <EditInput
            label="Departure"
            labelId="departure"
            currentData={departureState}
            styles="w-64"
            setValue={setDepartureState}
          />
          <EditInput
            label="Destination"
            labelId="destination"
            currentData={destinationState}
            styles="w-64"
            setValue={setDestinationState}
          />
          <EditInput
            type="date"
            label="Date of travel"
            labelId="Date-of-travel"
            currentData={dateOfTravelState}
            styles="w-64"
            setValue={setDateOfTravelState}
          />
          <EditInput
            type="date"
            label="Date of return"
            labelId="Date-of-return"
            currentData={dateOfReturnState}
            styles="w-64"
            setValue={setDateOfReturnState}
          />
          <div className="my-1 col-span-2">
            <div className="flex flex-col">
              <label htmlFor="travelReason">Travel Reason</label>
              <textarea
                rows={4}
                cols={15}
                className="rounded-md my-2 p-2 border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500"
                defaultValue={travelReasonState}
                onChange={(e) => {
                  setTravelReasonState(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex my-4">
          <input
            onChange={() => setCheckState(!checkState)}
            type="checkbox"
            className="bg-white border-yellow-500 text-yellow-500 focus:ring-yellow-500 mt-2 mx-2"
          />
          <h1 className="mx-1 mt-[4px]">Save information for next trip</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <EditButton handleClick={setUserConfirmation} handleDialogueStatus={setDialogueStatus} />
      </div>
      {userConfirmation ? (
        <ConfirmationDialogue
          dialogueStatus={dialogueStatus}
          handleConfirm={editFunction}
          handleCancel={setUserConfirmation}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default EditRequest;
