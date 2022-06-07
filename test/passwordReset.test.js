import React from 'react';
import NewPassword from '../src/components/password/NewPassword'
import ResetPassword from '../src/components/password/ResetPassword';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from './jest.setup';
import { waitFor } from '@testing-library/react';

describe('Password reset',()=>{
  it('render request password form page',async()=>{
    render(<ResetPassword/>);
    fireEvent.click(screen.getByText(/Reset/i))
    await waitFor(() => expect(screen.queryByText(/Reset/i)).toBeInTheDocument());

    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    fireEvent.change(screen.getByPlaceholderText('Email Address'), {
      target: { value: 'bademail' },
    });
    fireEvent.click(screen.getByText(/Reset/i))
    await waitFor(() => expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument());
    fireEvent.change(screen.getByPlaceholderText('Email Address'), {
      target: { value: 'test@me.com' },
    });
    fireEvent.click(screen.getByText(/Reset/i))
    await waitFor(() => expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument());
  })

  it('render new password entry form page',async()=>{
    render(<NewPassword/>)
    expect(screen.queryByText(/Save/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Password')).toBeInTheDocument()
    fireEvent.change(screen.getByPlaceholderText('Enter Password'), {
      target: { value: 'test@123' },
    });
    fireEvent.click(screen.getByText(/Save/i))
  });

});