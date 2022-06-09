import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/features/userRole.feauture';
import Spinner from '../reusable/Spinnar';
import UserRoleDashboard from './UserRoleDashboard';

export default function UserRoles() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <section
      data-testid="userRole_page"
      className="w-full h-[80vh] p-10 bg-white rounded-xl shadow-md overflow-y-scroll drop-shadow-lg mt-10"
    >
      {!loading ? <UserRoleDashboard userDetails={users} /> : <Spinner />}
    </section>
  );
}
