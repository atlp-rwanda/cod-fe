/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import '../../styles/custom.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../api/profileApi';
import { updatedProfile } from '../../redux/features/profile.feature';
import { updateProfile } from '../../redux/actions/profile.action';
import Alert from '../Auth/Alert';
import getToken from '../../api/refreshTokenApi';

const Profile = () => {
  const profile = useSelector((state) => state.profile.value);
  const { message, error } = useSelector((state) => state.register);
  const [userData, setUserData] = useState({});
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getProfile = async () => {
    const checkLogin = await getToken();
    if (!checkLogin) {
      return navigate('../login');
    }
    const results = await getUserProfile();
    dispatch(updatedProfile(results));
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUserData((values) => ({ ...values, [name]: value }));
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      gender: userData.gender,
      language: userData.language,
      currency: userData.currency,
      location: userData.location,
      departement: userData.departement,
      manager: `${checked}`,
      birthdate: userData.date,
    };
    dispatch(updateProfile(postData));
  };

  return (
    <div className="profile-div">
      <div className="panel-left">
        <div className="bg-white custom-rounded hover:bg-gray-200" style={{ height: '5%',marginBottom:'5px' }}>
          <a href='/dashboard'>
            <span className="mx-0 font-medium md:mx-4">Dashboard</span>
          </a>
        </div>
        <div className="bg-white custom-rounded" style={{ height: '95%' }}>
          {profile && Object.keys(profile).length > 0 && (
            <div className="profile" id="profile">
              <h4>My Profile</h4> <hr />
              <ul>
                <li><b>Gender: </b> {profile.gender}</li>
                <li><b>Language: </b> {profile.language}</li>
                <li><b>Location: </b> {profile.location}</li>
                <li><b>birth Date: </b>{ (new Date(profile.birthdate)).toLocaleString()}</li>
                <li><b>Currency: </b>{profile.currency}</li>
                <li><b>Department: </b>{profile.departement}</li>
              </ul>
            </div>
          )}
          {(!profile || Object.keys(profile).length === 0) && (
            <div
              className="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
              style={{ margin: '10px' }}
            >
              <span className="font-medium" style={{ margin: '10px' }}>
                Unable to get your profile
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white custom-rounded panel panel-right">
        <div className="profile-form">
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
            {error && <Alert message={error.payload} heading="Error" variant="error" />}
            {message && <Alert message={message.payload} heading="Success" variant="success" />}
            <div className="mb-4">
              <label htmlFor="gender" className="block mb-1 text-sm font-bold text-gray-700">
                Gender
              </label>
              <select
                role="gender"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={handleInputChange}
                name="gender"
                id="gender"
                required
              >
                <option>select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input />
            </div>
            <div className="mb-4">
              <label htmlFor="language" className="block mb-2 text-sm font-bold text-gray-700">
                Language
              </label>
              <input
                role="language"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="language"
                id="language"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block mb-2 text-sm font-bold text-gray-700">
                Location
              </label>
              <input
                role="location"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="location"
                id="location"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Birth Date</label>
              <input
                role="date"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="date"
                name="date"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-bold text-gray-700">Currency</label>
              <select
                role="currency"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={handleInputChange}
                name="currency"
              >
                <option>select currency</option>
                <option value="Local">Local Currency</option>
                <option value="Dollars">US Dollars</option>
                <option value="Euros">Euro Currency</option>
              </select>
              <input />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Department</label>
              <input
                role="departement"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                onChange={handleInputChange}
                name="departement"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
              <input
                    className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="true"
                    onChange={handleCheck}
                  /><span className="inline-block text-gray-800 form-check-label">Are a manager ? </span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                role="UpdateButton"
                className="px-4 py-2 font-bold text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
                id="updateButton"
                style={{ backgroundColor: '#D2691E' }}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
