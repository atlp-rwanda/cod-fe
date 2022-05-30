import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, store } from './jest.setup';

import Login from '../src/components/Auth/Login';
import Signup from '../src/components/Auth/Signup';
import * as Auth from '../src/redux/features/auth.feature';

const { registerReducer, loginReducer } = Auth.default;
const { registerPending, registerSuccess, registerFail } = Auth;
const { loginPending, loginSuccess, loginFail } = Auth;

const user = {
  firstname: 'Rukundo',
  lastname: 'Kevin',
  email: 'rukundoke@gmail.com',
  password: 'Kevin123@',
  confirmPassword: 'Kevin123@',
};

const loginUser = {
  email: 'random1@gmail.com',
  password: 'altp6@random',
};

const wrongData = {
  shortPassword: '123',
  wrongEmail: 'wrongemail@gmail.co',
  errorEmail: 'error@gmail.com',
};

describe('Authentication', () => {
  test('Register user after clicking register button', async () => {
    render(<Signup />, { route: '/login' });

    // should show no error initially, and not be signed up in a user
    expect(screen.getByText(/Register/i)).toBeInTheDocument();
    expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Firstname', { selector: 'input' }), {
      target: { value: user.firstname },
    });
    fireEvent.change(screen.getByLabelText('Lastname', { selector: 'input' }), {
      target: { value: user.lastname },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your email address'), {
      target: { value: user.email },
    });
    fireEvent.change(screen.getByLabelText('Password', { selector: 'input' }), {
      target: { value: wrongData.shortPassword },
    });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
      target: { value: 'Rukundo' },
    });

    fireEvent.click(screen.getByText('Register'));

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/Passwords don't match/i)).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
      target: { value: wrongData.shortPassword },
    });
    fireEvent.click(screen.getByText('Register'));

    expect(screen.queryByText(/Passwords don't match/i)).not.toBeInTheDocument();
    expect(
      await screen.findByText(/Password:eight characters, at least one letter/i)
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Password', { selector: 'input' }), {
      target: { value: user.password },
    });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
      target: { value: user.password },
    });
    fireEvent.click(screen.getByText('Register'));

    expect(screen.queryByText(/Password:eight characters, /i)).not.toBeInTheDocument();
    expect(await screen.findByText(/User created/i)).toBeInTheDocument();
  });

  test('Logins in the user after clicking login button', async () => {
    render(<Login />);

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Email address'), {
      target: { value: wrongData.wrongEmail },
    });
    fireEvent.change(screen.getByLabelText('Password', { selector: 'input' }), {
      target: { value: loginUser.password },
    });

    fireEvent.click(screen.getByText('Login'));
    expect(await screen.findByText(/Error/i)).toBeInTheDocument();
    expect(screen.getByText(/This email does not exist/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Email address'), {
      target: { value: wrongData.errorEmail },
    });
    
    fireEvent.click(screen.getByText('Login'));
    expect(await screen.findByText(/Error/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Email address'), {
      target: { value: user.email },
    });
    fireEvent.click(screen.getByText('Login'));

    const success = await screen.findAllByText(/Success/i);
    expect(success[0]).toBeInTheDocument();
    expect(await screen.findByText(/Login successful/i)).toBeInTheDocument();
    expect(localStorage.getItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});

describe('Auth reducers', () => {
  test('Should return  initial state ', () => {
    expect(registerReducer(undefined, {})).toEqual({
      isLoading: false,
      error: '',
      message: '',
    });
    expect(loginReducer(undefined, {})).toEqual({
      isLoading: false,
      error: '',
      isAuth: false,
    });
  });

  test('Should handle register pending state', () => {
    const previousState = {};
    expect(registerReducer(previousState, registerPending())).toEqual({
      isLoading: true,
      error: '',
      message: '',
    });
    const loginPreviousState = {};
    expect(loginReducer(loginPreviousState, loginPending())).toEqual({
      isLoading: true,
      error: '',
      isAuth: false,
    });
  });

  test('Should handle register fail state', () => {
    const previousState = {};
    expect(registerReducer(previousState, registerFail('Some error message'))).toEqual({
      isLoading: false,
      error: {
        payload: 'Some error message',
        type: 'register/registerFail',
      },
      message: '',
    });
    const loginPreviousState = {};
    expect(loginReducer(loginPreviousState, loginFail('Some error message'))).toEqual({
      isLoading: false,
      error: {
        payload: 'Some error message',
        type: 'login/loginFail',
      },
      isAuth: false,
    });
  });

  test('Should handle register success state', () => {
    const previousState = {};
    expect(registerReducer(previousState, registerSuccess('Some success message'))).toEqual({
      isLoading: false,
      error: '',
      message: {
        payload: 'Some success message',
        type: 'register/registerSuccess',
      },
    });
    const loginPreviousState = {};
    expect(loginReducer(loginPreviousState, loginSuccess('Some success message'))).toEqual({
      isLoading: false,
      error: '',
      isAuth: true,
    });
  });
});
