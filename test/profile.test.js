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
    const formElement = screen.getByText('Gender');
    expect(formElement).toBeInTheDocument();
  });
  it('should handle a todo being added to an empty list', () => {
    render(<Profile />);
  });

  it('It should update the user profile', async () => {
    render(<Profile />);
    expect(await screen.findByText(/Update/i)).toBeInTheDocument();
    expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Success:/i)).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole('gender'), {
      target: { value: profile.gender },
    });

    fireEvent.change(screen.getByRole('location'), {
      target: { value: profile.location },
    });
    fireEvent.change(screen.getByRole('language'), {
      target: { value: profile.language },
    });
    fireEvent.change(screen.getByRole('date'), {
      target: { value: profile.birthdate },
    });
    fireEvent.change(screen.getByRole('currency'), {
      target: { value: profile.currency },
    });
    fireEvent.change(screen.getByRole('departement'), {
      target: { value: '' },
    });
  });
});
