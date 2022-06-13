/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
import { PlusIcon } from '@heroicons/react/outline';
import { getAllTripReq } from '../../api/tripReqApi';
import { changeData } from '../../redux/features/statistics.features';
import { Button } from '../tables/shared/Button';

function TripStatistics() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.statistics.data);
  const [states, setStates] = useState(props);
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);
  const [dataState, setDataState] = useState('status');
  const [status, setStatus] = useState({});
  const [isBar, setIsBar] = useState(false);
  const [isDoughnut, setIsDoughnut] = useState(false);
  const initialDate = new Date('01/02/2000');
  const today = new Date();
  const [fromDate, setFromDate] = useState(initialDate);
  const [toDate, setToDate] = useState(today);
  const [label, setLabel] = useState('');
  const [customColor, setCustomColor] = useState([]);
  useLayoutEffect(() => {
    const getTrips = async () => {
      const res = await getAllTripReq();
      setStates(res?.data);
      dispatch(changeData(res?.data));
    };
    getTrips();
  }, []);
  const countExistance = (count) => {
    const newObj = {};
    for (const element of count) {
      if (newObj[element]) {
        newObj[element] += 1;
      } else {
        newObj[element] = 1;
      }
    }
    return newObj;
  };
  const findData = () => {
    if (dataState === 'status') {
      const count = states.map((state) => state.status);
      setStatus(countExistance(count));
      setLabel('Status graph');
      return countExistance(count);
    }
    if (dataState === 'departure') {
      const count = [];
      states.map((state) => count.push(state.departure));
      setLabel('Departure graph');
      return countExistance(count);
    }
    if (dataState === 'destination') {
      const count = [];
      states.map((state) => count.push(...state.destination));
      setLabel('Destination graph');
      return countExistance(count);
    }
    if (dataState === 'accomodation') {
      const count = states.map((state) => state.Accomodation.name);
      setLabel('Accomodation graph');
      return countExistance(count);
    }
  };
  const searchFunction = () => {
    const filterFunction = (from, to) => {
      const searchedData = props.filter((data) => {
        const travelDate = new Date(data.dateOfTravel);
        const fromDate1 = new Date(from);
        const toDate1 = new Date(to);
        return travelDate >= fromDate1 && travelDate <= toDate1;
      });
      return searchedData;
    };
    setStates(filterFunction(fromDate, toDate));
  };
  useEffect(() => {
    const res = findData();
    setKeys(Object.keys(res).slice(0, 5));
    setValues(Object.values(res).slice(0, 5));
    const count = states.map((state) => state.status);
    setStatus(countExistance(count));
  }, [dataState, states]);
  const totalTrip = Object.values(status).reduce((a, b) => a + b, 0);
  const pendingTrip = status.pending || 0;
  const approvedTrip = status.approved || 0;
  const rejectedTrip = status.rejected || 0;
  useEffect(() => {
    const colorArray = [...keys];
    colorArray[colorArray.indexOf('approved')] = 'green';
    colorArray[colorArray.indexOf('rejected')] = 'red';
    colorArray[colorArray.indexOf('pending')] = 'gray';
    if (dataState === 'status') {
      setCustomColor(colorArray);
    } else {
      setCustomColor([]);
    }
  }, [keys]);

  return (
    <>
      <div className="flex flex-col px-4">
        <div className="flex flex-col md:flex-row md:space-x-12 md:items-center">
          <div className="flex space-x-6 items-center">
            <div className="flex flex-col my-4">
              <label htmlFor="from">From</label>
              <input
                data-testid="from"
                type="date"
                className="rounded-md my-2 p-2 border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500"
                defaultValue={initialDate.toISOString().substr(0, 10)}
                onChange={(e) => {
                  setFromDate(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col my-4">
              <label htmlFor="to">To</label>
              <input
                data-testid="to"
                type="date"
                className="rounded-md my-2 p-2 border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500"
                defaultValue={today.toISOString().substr(0, 10)}
                onChange={(e) => {
                  setToDate(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            onClick={() => searchFunction()}
            data-testid="searchStat"
            type="button"
            className="rounded-md text-lg border border-yellow-500 text-white w-16 bg-yellow-500 hover:bg-yellow-600 mb-4 md:mb-2 transform hover:scale-110  md:mt-8 transition ease-in-out duration-300 text-center"
          >
            Search
          </button>
        </div>
        <div className="md:flex md:items-center md:space-x-12 grid grid-cols-2 gap-y-3 gap-x-4">
          <div className="flex items-center justify-center border relative border-yellow-500 rounded-md md:p-4 transform hover:scale-110 w-36 md:w-64 h-36 bg-white  transition ease-in-out duration-300 text-center">
            <span className="absolute left-0 top-0 py-3 text-yellow-500 text-base w-14 h-14 rounded-full border-4 border-solid border-yellow-500">
              100%
            </span>
            <div className="text-lg md:text-2xl">
              <p>Total Trips</p>
              <p className="ml-4 w-24">{totalTrip}</p>
            </div>
          </div>
          <div className="flex items-center justify-center border border-green-500 rounded-md md:p-4 transform hover:scale-110 w-36 md:w-64 h-36 bg-white transition ease-in-out duration-300 text-center">
            <span className="absolute left-0 top-0 py-2 text-green-500 text-base w-12 h-12 rounded-full border-4 border-green-500">
              {totalTrip ? (approvedTrip * 100) / totalTrip : 0}%
            </span>
            <div className="text-lg md:text-2xl">
              <p>Approved</p>
              <p className="ml-4 w-24">{approvedTrip}</p>
            </div>
          </div>
          <div className="flex items-center justify-center border border-gray-500 rounded-md md:p-4 transform hover:scale-110 w-36 md:w-64 h-36 bg-white transition ease-in-out duration-300 text-center">
            <span className="absolute left-0 top-0 py-2 text-gray-500 text-base w-12 h-12 rounded-full border-4 border-solid border-gray-500">
              {totalTrip ? (pendingTrip * 100) / totalTrip : 0}%
            </span>
            <div className="text-lg md:text-2xl">
              <p>Pending</p>
              <p className="ml-4 w-24">{pendingTrip}</p>
            </div>
          </div>
          <div className="flex items-center justify-center border border-red-500 rounded-md md:p-4 transform hover:scale-110 w-36 md:w-64 h-36 bg-white transition ease-in-out duration-300 text-center">
            <span className="absolute left-0 top-0 py-2 text-red-500 text-base w-12 h-12 rounded-full border-4 border-solid border-red-500">
              {totalTrip ? (rejectedTrip * 100) / totalTrip : 0}%
            </span>
            <div className="text-lg md:text-2xl">
              <p>Rejected</p>
              <p className="ml-4 w-24">{rejectedTrip}</p>
            </div>
          </div>
        </div>
        {states?.length ? (
          <div>
            <div className="flex space-x-12 items-center">
              <select className="w-36 h-10 rounded" onChange={(e) => setDataState(e.target.value)}>
                <option value="status">Status</option>
                <option value="accomodation">Accomodation</option>
                <option value="departure">Departure</option>
                <option value="destination">Destination</option>
              </select>
              <div className="md:flex items-center my-6">
                <div className="flex items-center">
                  <input
                    onChange={() => setIsBar(!isBar)}
                    defaultChecked
                    type="checkbox"
                    className="bg-white border-yellow-500 text-yellow-500 focus:ring-yellow-500 mx-2"
                  />
                  <h1 className="mx-1">Bar</h1>
                </div>
                <div className="flex items-center">
                  <input
                    onChange={() => setIsDoughnut(!isDoughnut)}
                    defaultChecked
                    type="checkbox"
                    className="bg-white border-yellow-500 text-yellow-500 focus:ring-yellow-500 mx-2"
                  />
                  <h1 className="mx-1 ">Doughnut</h1>
                </div>
              </div>
            </div>
            <div
              className={`${
                (isDoughnut || isBar) && 'mx-auto'
              } grid grid-rows-1 md:grid-cols-2 gap-4 my-4'
          }`}
            >
              {!isBar && (
                <div className="mt-12 md:mt-2 bg-white" data-testid="barchart">
                  <div className="w-[400px] h-auto lg:w-[500px] mb-16 md: mt-16">
                    <Bar
                      options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                beginAtZero: true,
                              },
                            },
                          ],
                        },
                      }}
                      data={{
                        labels: keys,
                        datasets: [
                          {
                            label,
                            data: values,
                            backgroundColor: customColor.length
                              ? customColor
                              : ['green', 'red', 'orange', 'yellow', 'blue'],
                            barThickness: 25,
                            width: 5,
                          },
                        ],
                      }}
                    />
                  </div>
                </div>
              )}
              {!isDoughnut && (
                <div className="mt-12 md:mt-2 bg-white" data-testid="doughnut">
                  <div className="w-[400px]">
                    <Doughnut
                      data={{
                        labels: keys,
                        datasets: [
                          {
                            label,
                            data: values,
                            backgroundColor: customColor.length
                              ? customColor
                              : ['green', 'red', 'orange', 'yellow', 'blue'],
                          },
                        ],
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="py-2 flex flex-col md:flex-row gap-6">
            <Button
              child={
                <a href="./dashboard" className="flex items-center" data-testid="new-trip">
                  {' '}
                  <PlusIcon className="h-8" /> New Trip
                </a>
              }
            />
          </div>
        )}
      </div>
    </>
  );
}

export default TripStatistics;
