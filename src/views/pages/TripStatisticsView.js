import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import TripStatistics from '../../components/tripRequest/TripStatistics';

function TripStatisticsView() {
  const location = useLocation();
  const { state } = location;
  if (!state) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return (
    <div className="flex justify-between h-full w-full">
      <SideBar />
      <TripStatistics state={state} />
    </div>
  );
}

export default TripStatisticsView;
