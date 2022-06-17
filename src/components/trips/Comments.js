import React, { useState,useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import { token } from '../../api';
import Messages from './Messages';
import { getComments } from '../../redux/features/tripComments.feature';
import { getTripComments } from '../../api/tripApi'; 
import { allTrips } from '../../api/tripApi';

export default function Comments() {
  const [trips, setMyTrips] = useState([]);
  const {messagesAvailable } = useSelector((state) => state.tripComments);
  const [tripSelected, setTrip] = useState();
  const [loaded, setStatus] = useState(false);
  const userId = jwt_decode(token).id;
  const dispatch = useDispatch();

  const myTrips = async() => {
    const trips=await allTrips();
    setMyTrips(trips);
  };

  useEffect(() => {
    myTrips();
  }, []);

  const MyTrips = (element) => {
    return element.userId === userId;
  };

  const getMessages = async (trip) => {
    const messages = await getTripComments(trip.id);
    setTrip(trip.id);
    if (messages) {
      setStatus(true);
      dispatch(getComments(messages));
    }
  };

  const filtered = trips.filter(MyTrips);
  return (
    <div className="container flex flex-col w-full p-8 mt-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col">
        {filtered.length > 0 && !loaded ? (
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <div className="grid grid-flow-col grid-rows-4 gap-6">
                {filtered.map((element) => (
                  <div>
                    <nav className="flex" aria-label="Breadcrumb">
                      <ol className="inline-flex items-center space-x-1 md:space-x-3 comments-trips" style={{ paddingLeft:'10px' }}>
                        <li className="inline-flex items-center" key="{element.id}">
                          <a
                            className="inline-flex items-center text-gray-700 hover:text-gray-900"
                            href="#"
                          >
                            {element.Accomodation.name}
                          </a>
                        </li>
                        <li className="inline-flex items-center">
                          <a
                            className="text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                            href="#"
                          >
                            {element.destination}
                          </a>
                        </li>
                        <li className="inline-flex items-center" aria-current="page">
                          <a
                            className="rounded-sm hover:bg-blue-700 focus:outline-none"
                            style={{ backgroundColor: '#D2691E', color:'#fff' }}
                            onClick={getMessages.bind(this, element)}
                          >
                            Comment
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {messagesAvailable && loaded? (
        <Messages trip={tripSelected} />
      ) : (
        <div></div>
      )}
    </div>
  );
}