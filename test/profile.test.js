import React from 'react';
import '@testing-library/jest-dom';
import Profile from '../src/components/profile/Profile';
import { render, fireEvent, screen } from './jest.setup';
import { Provider } from 'react-redux';
import store from '../src/redux/store'
import { act } from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import { updatedProfile } from '../src/redux/features/profile.feature';
import { updateProfile } from '../src/redux/actions/profile.action';

const profile={
  gender: "male",
  language: "Kinyarwanda",
  currency: "Local",
  location: "kigali",
  departement: "none",
  manager:"true",
  birthdate: "02/02/2020",
};

describe("User profile",()=>{
  test('it renders user profile page', async() => {
    render(<Provider store={store}><Profile /></Provider>);
    const formElement = screen.getByText('Gender');
    expect(formElement).toBeInTheDocument();
  });
  it('should handle a todo being added to an empty list', async() => {
    await act(async () =>{
      render(<Provider store={store}><Profile /></Provider>);
      const previous={}
    expect(Object.keys(updatedProfile(previous,updateProfile(profile))).sort()).toEqual(['payload', 'type'].sort());
    } );
  })

  it('It should update the user profile',()=>{
    act(async()=>{
      render( <Provider store={store}> <Profile /> </Provider>);
      expect(screen.getByText(/Update /i)).toBeInTheDocument();
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
      expect(screen.getByRole('UpdateButton')).toBeInTheDocument();
      await waitFor(() => fireEvent.click(screen.getByRole('UpdateButton')));
      expect(screen.queryByText(/Error:/i)).toBeInTheDocument();
      expect(screen.getByText(/choose your departement/i)).toBeInTheDocument();
      fireEvent.change(screen.getByRole('departement'), {
        target: { value: profile.departement },
      });
      await waitFor(() => fireEvent.click(screen.getByRole('UpdateButton')));
      expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/My Profile:/i)).not.toBeInTheDocument();
      expect(screen.getByText(/Profile updated successfully/i)).toBeInTheDocument();
    });
  });
})