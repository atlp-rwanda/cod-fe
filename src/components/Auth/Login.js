/* eslint-disable consistent-return */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { loginFields } from '../../constants/formFields';
import { login, googleLogin, facebookLogin } from '../../redux/actions/auth.action';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';
import Alert from './Alert';

const fields = loginFields;
const fieldsState = {};
fields.forEach((field) => {
  fieldsState[field.id] = '';
});

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    setTimeout(() => {
      if (isAuth) return navigate('../dashboard');
    }, 300);
  }, [isAuth]);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleGoogleSubmit = ({ tokenId }) => {
    dispatch(googleLogin(tokenId));
  };
  const handelFacebookSubmit = (user) => {
    const { email, name, userID } = user;
    dispatch(facebookLogin({ email, name, userID }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginState;
    return dispatch(login({ email, password }));
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {error && <Alert message={error.payload} heading="Error" variant="error" />}
        {isAuth && <Alert message="Login successful" heading="Success" variant="success" />}
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
      <FacebookLogin
        appId="516206283379225"
        autoLoad={false}
        fields="name,email,picture"
        callback={handelFacebookSubmit}
        cssClass="group relative w-full flex justify-center py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-4"
      />
      <GoogleLogin
        clientId="615843052602-3io9vpipj2uiemdjteven18pm16l85b2.apps.googleusercontent.com"
        buttonText="Sign in with google"
        onSuccess={handleGoogleSubmit}
        onFailure={handleGoogleSubmit}
      />
    </form>
  );
};

export default Login;
