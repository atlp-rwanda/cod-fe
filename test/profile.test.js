import React from 'react';
import '@testing-library/jest-dom';
import Profile from '../src/components/profile/Profile';
import { render, fireEvent, screen } from './jest.setup';

const profile = {
  gender: 'male',
  language: 'Kinyarwanda',
  currency: 'Local',
  location: 'kigali',
  departement: 'none',
  manager: 'true',
  birthdate: '02/02/2020',
};

describe('User profile', () => {
  test('it renders user profile page', () => {
    render(<Profile />);
    const formElement = screen.getByText(/Waiting for Profile/i);
    expect(formElement).toBeInTheDocument();
  });
});
