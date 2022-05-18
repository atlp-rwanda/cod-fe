import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../jest.setup';
import ApprovalComponent from '../../src/components/tables/ApprovalComponent';
import ProfileModal from '../../src/components/ProfileModal';

const state = {
  id: '8b5c35f7-0459-4dae-8d61-a443dc5625b6',
  userId: '861d7c9d-a8a8-4308-bce8-2c6c6a66c847',
  departure: 'Huye',
  destination: ['Rubavu', 'Musanze'],
  dateOfTravel: '2022-05-13T09:51:05.975Z',
  dateOfReturn: '2022-05-14T09:51:05.975Z',
  travelReason: 'This is travel reason in test',
  status: 'pending',
  createdAt: '2022-05-12T09:51:20.590Z',
  updatedAt: '2022-05-24T14:16:23.728Z',
  Accomodation: {
    id: 4,
    name: 'Grand Legacy',
  },
  User: {
    id: '861d7c9d-a8a8-4308-bce8-2c6c6a66c847',
    firstname: 'New Random',
    lastname: 'Person',
  },
};
const profile = {
  id: 7,
  userId: '861d7c9d-a8a8-4308-bce8-2c6c6a66c847',
  gender: 'Male',
  language: 'English',
  currency: 'USD',
  location: 'Washington',
  departement: 'President',
  manager: 'none',
  birthdate: '1954-02-02T00:00:00.000Z',
  createdAt: '2022-06-20T15:10:19.503Z',
  updatedAt: '2022-06-20T15:10:19.503Z',
};
describe('Approve or reject atrip request', () => {
  test('Should Render approve table page', async () => {
    const { findByText } = render(<ApprovalComponent state={state} />);
    expect(await findByText('Grand Legacy')).toBeInTheDocument();
    expect(await findByText('Huye')).toBeInTheDocument();
    expect(await findByText('Rubavu,Musanze')).toBeInTheDocument();
    const approve = screen.getByTestId('approve-button');
    expect(approve).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('approve-button'));
    setTimeout(async () => {
      expect(await findByText('Success')).toBeInTheDocument();
    }, 1500);

    const reject = screen.getByTestId('reject-button');
    expect(reject).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('reject-button'));
    setTimeout(async () => {
      expect(await findByText('Success')).toBeInTheDocument();
    }, 1500);

    fireEvent.click(screen.getByText('View Profile'));
    setTimeout(async () => {
      expect(await findByText('Close')).toBeInTheDocument();
      const close = screen.getByTestId('close-button');
      const gender = screen.getByText('Male');
      expect(close).toBeInTheDocument();
      expect(gender).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('close-button'));
    }, 1500);
  });
});
describe('test Profile', () => {
  test('profile model render', async () => {
    render(<ProfileModal data={profile} />);

    const close = screen.getByTestId('close-button');
    const gender = screen.getByText('Male');
    expect(close).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
  });
});
