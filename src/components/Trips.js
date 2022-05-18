/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTripReq } from '../redux/features/tripReq.feature';
import Table from './tables/TripRequests';
import { columns } from '../constants/reqColumns';
import Spinner from './reusable/Spinnar';

const Trip = () => {
  const dispatch = useDispatch();
  const { trips, loading } = useSelector((state) => state.tripRequests);

  useEffect(() => {
    dispatch(fetchTripReq());
  }, []);

  const reqColumns = React.useMemo(() => columns, []);

  return (
    <div className="p-2 mt-[10vh]">
      {!loading ? <Table columns={reqColumns} trips={trips} /> : <Spinner />}
    </div>
  );
};

export default Trip;
