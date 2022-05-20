import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from './authTestSetup'

import Signup from '../src/components/Auth/Signup'
import * as Auth from '../src/redux/features/auth.feature'

const {registerReducer } = Auth.default;
const { registerPending, registerSuccess, registerFail} = Auth;

const user = {
  firstname: 'Rukundo',
  lastname: 'Kevin',
  email: 'rukundoke@gmail.com',
  password: 'Kevin123@',
  confirmPassword: 'Kevin123@'
}

const wrongData = {
  shortPassword: '123',
}
  
describe("Authentication",()=>{
    test('fetches & receives a user after clicking the fetch user button', async () => {
        render( <Signup />);  
    
  // should show no error initially, and not be signed up in a user
  expect(screen.getByText(/Register/i)).toBeInTheDocument()
  expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument()


  fireEvent.change(screen.getByLabelText('Firstname', { selector: 'input' }), { target: { value: user.firstname } })
  fireEvent.change(screen.getByLabelText('Lastname', { selector: 'input' }), { target: { value: user.lastname } })
  fireEvent.change(screen.getByPlaceholderText('Enter your email address'), { target: { value: user.email } })
  fireEvent.change(screen.getByLabelText('Password', { selector: 'input' }), { target: { value: wrongData.shortPassword } })
  fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'Rukundo' } })

  fireEvent.click(screen.getByText("Register"))

  expect(screen.getByRole("alert")).toBeInTheDocument()
  expect(screen.getByText(/Passwords don't match/i)).toBeInTheDocument()
  fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: wrongData.shortPassword } })
  fireEvent.click(screen.getByText("Register"))

  expect(screen.queryByText(/Passwords don't match/i)).not.toBeInTheDocument()
  expect(await screen.findByText(/Password:eight characters, at least one letter/i)).toBeInTheDocument()

  fireEvent.change(screen.getByLabelText('Password', { selector: 'input' }), { target: { value: user.password } })
  fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: user.password } })
  fireEvent.click(screen.getByText("Register"))

  expect(screen.queryByText(/Password:eight characters, /i)).not.toBeInTheDocument()
  expect(await screen.findByText(/User created/i)).toBeInTheDocument()
      })
})

describe("Auth reducers",()=>{
test('Should return register initial state ', () => {
  expect(registerReducer(undefined, {})).toEqual(
    {
        isLoading: false,
        error:"",
        message: ""
    }
  )
})

test('Should handle register pending state', () => {
    const previousState = {}
    expect(registerReducer(previousState, registerPending())).toEqual(
        {
            isLoading: true,
            error:"",
            message: ""
        }
    )
  })

  test('Should handle register fail state', () => {
    const previousState = {}
    expect(registerReducer(previousState, registerFail("Some error message"))).toEqual(
        {
            isLoading: false,
            error:{   
                 payload: "Some error message",
                 type: "register/registerFail",
            },
            message: ""
        }
    )
  })

  test('Should handle register success state', () => {
    const previousState = {}
    expect(registerReducer(previousState, registerSuccess("Some success message"))).toEqual(
        {
            isLoading: false,
            error:"",
            message: {   
                payload: "Some success message",
                type: "register/registerSuccess",
           },
        }
    )
  })
})

