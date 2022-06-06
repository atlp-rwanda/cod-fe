import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import EditRequest from '../../components/tripRequest/EditRequest';

function EditRequestView() {
  const location = useLocation();
  const { state } = location;
  if (!state) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return (
    <div className="flex justify-between h-full w-full">
      <SideBar />
      <EditRequest state={state} />
    </div>
  );
}

export default EditRequestView;
