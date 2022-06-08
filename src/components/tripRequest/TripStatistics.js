/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

function TripStatistics(props) {
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);
  const [dataState, setDataState] = useState('status');
  const [status, setStatus] = useState({});
  const { state: stateProps } = props;
  const [isBar, setIsBar] = useState(false);
  const [isDoughnut, setIsDoughnut] = useState(false);
  const initialDate = new Date('01/02/2000');
  const today = new Date();
  const [fromDate, setFromDate] = useState(initialDate);
  const [toDate, setToDate] = useState(today);
  const [label, setLabel] = useState('');
  const [states, setStates] = useState(stateProps);
  const [customColor, setCustomColor] = useState([]);
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
      setCustomColor(['gray', 'green', 'red']);
      return countExistance(count);
    }
    if (dataState === 'departure') {
      const count = [];
      states.map((state) => count.push(state.departure));
      setLabel('Departure graph');
      setCustomColor([]);
      return countExistance(count);
    }
    if (dataState === 'destination') {
      const count = [];
      states.map((state) => count.push(...state.destination));
      console.log(count);
      setLabel('Destination graph');
      setCustomColor([]);
      return countExistance(count);
    }
    if (dataState === 'accomodation') {
      const count = states.map((state) => state.Accomodation.name);
      setLabel('Accomodation graph');
      setCustomColor([]);
      return countExistance(count);
    }
  };
  const searchFunction = () => {
    const filterFunction = (from, to) => {
      const searchedData = stateProps.filter((data) => {
        const travelDate = new Date(data.dateOfTravel);
        const fromDate1 = new Date(from);
        const toDate1 = new Date(to);
        return travelDate > fromDate1 && travelDate < toDate1;
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
  return (
    <>
      <div className="lg:ml-80 flex flex-col ">
        <h1 className="text-yellow-500 text-3xl uppercase m-4">Trip Statistics</h1>
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
        <div className="md:flex md:items-center md:space-x-12 grid grid-cols-2 gap-y-3">
          <div className="border border-yellow-500 rounded-md md:p-4 transform hover:scale-110 w-36  transition ease-in-out duration-300 text-center">
            <p>Total Trips</p>
            <p className="ml-4 w-24">{Object.values(status).reduce((a, b) => a + b, 0)}</p>
          </div>
          <div className="border border-green-500 rounded-md md:p-4 transform hover:scale-110 w-36 transition ease-in-out duration-300 text-center">
            <p>Approved Trips</p>
            <p className="ml-4 w-24">{status.approved || 0}</p>
          </div>
          <div className="border border-gray-500 rounded-md md:p-4 transform hover:scale-110 w-36 transition ease-in-out duration-300 text-center">
            <p>Pending Trips</p>
            <p className="ml-4 w-24">{status.pending || 0}</p>
          </div>
          <div className="border border-red-500 rounded-md md:p-4 transform hover:scale-110 w-36 transition ease-in-out duration-300 text-center">
            <p>Rejected Trips</p>
            <p className="ml-4 ">{status.rejected || 0}</p>
          </div>
          {states.length ? (
            <div className="flex mb-2">
              <div className="flex my-4">
                <input
                  onChange={() => setIsBar(!isBar)}
                  defaultChecked
                  type="checkbox"
                  className="bg-white border-yellow-500 text-yellow-500 focus:ring-yellow-500 mt-2 mx-2"
                />
                <h1 className="mx-1 mt-[4px]">Bar</h1>
              </div>
              <div className="flex my-4">
                <input
                  onChange={() => setIsDoughnut(!isDoughnut)}
                  defaultChecked
                  type="checkbox"
                  className="bg-white border-yellow-500 text-yellow-500 focus:ring-yellow-500 mt-2 mx-2"
                />
                <h1 className="mx-1 mt-[4px]">Doughnut</h1>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
        {states.length ? (
          <div>
            <select
              className="w-36 h-10 mt-4 rounded"
              onChange={(e) => setDataState(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="accomodation">Accomodation</option>
              <option value="departure">Departure</option>
              <option value="destination">Destination</option>
            </select>
            <div
              className={`${
                (isDoughnut || isBar) && 'mx-auto'
              } grid grid-rows-1 md:grid-cols-2 gap-4 my-4'
          }`}
            >
              {!isBar && (
                <div>
                  <div className="w-[400px] h-[90px] lg:w-[500px] mb-16 md: mt-16">
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
                            label: keys,
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
                <div className="mt-12 md:mt-2">
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
          <div>
            <h1>No Trips made in that period</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default TripStatistics;
