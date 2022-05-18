import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import ApprovalComponent from '../../components/tables/ApprovalComponent';

function TripApproval() {
  const location = useLocation();
  const { state } = location;
  if (!state) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return (
    <div className="flex bg-clrBackground">
      <SideBar />
      <ApprovalComponent state={state} />
    </div>
  );
}

export default TripApproval;
