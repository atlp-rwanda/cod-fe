/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCloseCircle } from 'react-icons/io';
import { BsPatchCheckFill } from 'react-icons/bs';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { setRole } from '../../redux/features/userRole.feauture';

const roleOptions = [
  { value: 'Super Administrator', label: 'Super Admin' },
  { value: 'Travel Administrator', label: 'Travel Admin' },
  { value: 'Manager', label: 'Manager' },
  { value: 'Requester', label: 'Requester' },
];

let tempUser;
function UserRoleDashboard({ userDetails }) {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.users);
  const [visible, setVisible] = useState(false);
  const [role, setNewRole] = useState('');
  const handleNewRole = (newRole) => {
    return setNewRole(newRole.value);
  };
  const handleAssignRole = (rolename, user) => {
    dispatch(setRole({ rolename, user }));
    return !error ? setVisible(false) : alert('Error Try Again');
  };

  return (
    <>
      <section data-testid="userRole_dash_header" className="w-full py-2 flex justify-between my-3">
        <span className="text-[#fab33f] ml-5 text-2xl tracking-widest font-normal">
          Registered Users
        </span>
      </section>

      <section data-testid="userRole_dash_content">
        <section
          data-testid="userRole_dash_content_head"
          className="w-full py-5 px-4 flex justify-between items-center border-t-[#808080] border-b-[#808080] border-t border-b"
        >
          <span className="w-[10%] text-center capitalize tracking-widest text-sm text-[#808080]">
            #No
          </span>
          <span className="w-[10%] text-center capitalize tracking-widest text-sm text-[#808080]">
            First Name
          </span>
          <span className="w-[10%] text-center capitalize tracking-widest text-sm text-[#808080]">
            Last Name
          </span>
          <span className="w-[10%] text-center capitalize tracking-widest text-sm text-[#808080]">
            email address
          </span>
          <span className="w-[10%] text-center capitalize tracking-widest text-sm text-[#808080]">
            Verified
          </span>
          <span className="w-[10%] text-center capitalize tracking-widest text-sm text-[#808080]">
            Role
          </span>
          <span className="w-[10%] text-center capitalize tracking-widest text-sm text-[#808080]">
            Role Upgrade
          </span>
        </section>

        <section
          data-testid="userRole_dash_content_details"
          className="mt-4 h-fit grid grid-cols-1 gap-y-3"
        >
          {Object.values(userDetails).map((userDetail) => {
            return userDetail.map((detail, index) => (
              <div
                key={`${detail.id}`}
                data-testid={`test-${detail.id}`}
                className="w-full py-5 px-4 flex justify-between items-center bg-white drop-shadow-md rounded-xl"
              >
                <span className="w-[10%] text-center flex justify-center capitalize tracking-widest text-xs text-black font-light">
                  {`${index}.`}
                </span>
                <span className="w-[10%] text-center flex justify-center capitalize tracking-widest text-xs text-black font-light">
                  {detail.firstname}
                </span>
                <span className="w-[10%] text-center flex justify-center capitalize tracking-widest text-xs text-black font-light">
                  {detail.lastname}
                </span>
                <span className="w-[10%] text-center flex justify-center tracking-widest text-xs text-black font-light">
                  {detail.email}
                </span>
                <span className="w-[10%] text-center flex justify-center capitalize tracking-widest text-xs text-black font-light">
                  {!detail.isVerified ? (
                    <IoIosCloseCircle className="h-[20px] w-[20px] text-red-500" />
                  ) : (
                    <BsPatchCheckFill className="h-[20px] w-[20px] text-green-400" />
                  )}
                </span>
                <span className="w-[10%] text-center flex justify-center capitalize tracking-widest text-xs text-black font-light">
                  {detail.rolename.roleName}
                </span>
                <button
                  data-testid={`setRole_btn-${detail.id}`}
                  onClick={() => {
                    setVisible(true);
                    tempUser = {
                      userId: detail.id,
                      firstname: detail.firstname,
                      lastname: detail.lastname,
                      email: detail.email,
                      rolename: detail.rolename.roleName,
                    };
                    setNewRole(detail.rolename.roleName);
                  }}
                  disabled={!detail.isVerified}
                  type="button"
                  className="w-[10%] cursor-pointer text-center capitalize tracking-widest text-xs text-[#fab33f] font-bold hover:underline hover:underline-offset-[10px] disabled:hover:no-underline disabled:hover:underline-offset-0 disabled:text-opacity-60"
                >
                  set role
                </button>
              </div>
            ));
          })}
        </section>
        {!visible ? (
          ''
        ) : (
          <section
            data-testid="userRole_assign_dash"
            id="assign_role_tab"
            className="absolute z-30 top-0 w-full h-screen bg-black bg-opacity-20 left-0 grid place-items-center"
          >
            <div className="absolute w-3/4 h-[450px] bg-white rounded-xl grid place-items-center place-content-center gap-y-5 grid-cols-1">
              <IoCloseCircleOutline
                onClick={() => setVisible(false)}
                className="absolute top-10 right-10 w-[40px] h-[40px] text-[#fab33f] cursor-pointer"
              />
              <div className="w-4/5 mx-auto flex justify-center items-center my-5">
                <span className="text-[#fab33f] ml-5 text-2xl tracking-widest font-normal capitalize">
                  set new role
                </span>
              </div>
              <div className="w-4/5 mx-auto py-5 px-4 flex justify-between items-center border-t-[#808080] border-b-[#808080] border-t border-b">
                <span className="w-1/5 text-center capitalize tracking-widest text-sm text-[#808080]">
                  First Name
                </span>
                <span className="w-1/5 text-center capitalize tracking-widest text-sm text-[#808080]">
                  Last Name
                </span>
                <span className="w-1/5 text-center capitalize tracking-widest text-sm text-[#808080]">
                  email address
                </span>
                <span className="w-1/5 text-center capitalize tracking-widest text-sm text-[#808080]">
                  Role
                </span>
              </div>

              <div className="w-4/5 mx-auto py-5 px-4 flex justify-between items-center">
                <span className="w-1/5 text-center capitalize tracking-widest text-sm text-black font-light">
                  {tempUser.firstname}
                </span>
                <span className="w-1/5 text-center capitalize tracking-widest text-sm text-black font-light">
                  {tempUser.lastname}
                </span>
                <span className="w-1/5 text-center tracking-widest text-sm text-black font-light">
                  {tempUser.email}
                </span>
                <span className="w-1/5 text-center capitalize tracking-widest text-sm text-black font-light">
                  <Select
                    data-testid="userRole_assign_select"
                    options={roleOptions}
                    onChange={handleNewRole}
                    defaultValue={role}
                  />
                </span>
              </div>

              <button
                data-testid="userRole_assign_button"
                type="button"
                onClick={() => handleAssignRole(role, tempUser.userId)}
                className="py-2 px-5 text-base font-medium text-white border border-black bg-black rounded capitalize tracking-wider cursor-pointer"
              >
                assign role
              </button>
            </div>
          </section>
        )}
      </section>
    </>
  );
}

export default UserRoleDashboard;
