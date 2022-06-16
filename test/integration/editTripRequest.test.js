import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../jest.setup';
import EditRequest from '../../src/components/tripRequest/EditRequest';

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
describe('Approve or reject atrip request', () => {
  test('Should Render approve table page', async () => {
    render(<EditRequest state={state} />);
    expect(screen.getByDisplayValue('Huye')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Rubavu,Musanze')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2022-05-13')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2022-05-14')).toBeInTheDocument();
    expect(screen.getByDisplayValue('This is travel reason in test')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('accomodation'), { target: { value: 'Serena Hotel' } });
    const update = screen.getByText('Update');
    expect(update).toBeInTheDocument();
    fireEvent.click(update);
    expect(screen.getByTestId('confirmDialogue_no_btn')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('confirmDialogue_yes_btn'));
    expect(await screen.findByText(/Success/i)).toBeInTheDocument();
  });
});
