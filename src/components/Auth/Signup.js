import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import signupFields from '../../constants/formFields';
import register from '../../redux/actions/auth.action';
import FormAction from './FormAction';
import Input from './Input';
import Alert from './Alert';

import { registerFail } from '../../redux/features/auth.feature';

const fields = signupFields;
const fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error } = useSelector((state) => state.register);

  useEffect(() => {
    setTimeout(() => {
      if (message.length > 1) return navigate('../login');
    }, 300);
  }, [message]);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, confirmPassword } = signupState;
    if (password !== confirmPassword) {
      return dispatch(registerFail("Passwords don't match"));
    }
    dispatch(register({ firstname, lastname, email, password }));
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {error && <Alert message={error.payload} heading="Error" variant="error" />}
        {message && <Alert message={message.payload} heading="Success" variant="success" />}
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Register" />
      </div>
    </form>
  );
};

export default Signup;
