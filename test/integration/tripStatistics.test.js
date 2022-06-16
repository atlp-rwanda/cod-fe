import React from 'react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { render, fireEvent, screen } from '../jest.setup';
import TripStatistics from '../../src/components/tripRequest/TripStatistics';
import 'jest-canvas-mock';

HTMLCanvasElement.prototype.getContext = () => {
  return {};
};
const mockStore = configureStore([]);
const state = [
  {
    id: 'a12b9a54-a086-4b87-9135-321278672053',
    userId: 'b66cfc7c-be2c-41f5-b459-e888bfe881a2',
    departure: 'Huy',
    destination: ['Kayonza'],
    dateOfTravel: '2022-05-13T00:00:00.000Z',
    dateOfReturn: '2022-05-14T00:00:00.000Z',
    travelReason: 'This is travel reason in test',
    status: 'pending',
    createdAt: '2022-05-12T09:51:20.888Z',
    updatedAt: '2022-06-07T13:27:55.746Z',
    Accomodation: {
      id: 1,
      name: 'SERENA',
    },
  },
  {
    id: 'afee0512-eb01-473f-b8cd-5a5d7456d44b',
    userId: 'b66cfc7c-be2c-41f5-b459-e888bfe881a2',
    departure: 'Rubav',
    destination: ['Musanze'],
    dateOfTravel: '2022-07-01T00:00:00.000Z',
    dateOfReturn: '2022-07-31T00:00:00.000Z',
    travelReason: 'Teravelling for funs',
    status: 'pending',
    createdAt: '2022-05-12T09:51:20.840Z',
    updatedAt: '2022-06-07T13:27:40.103Z',
    Accomodation: {
      id: 1,
      name: 'SERENA',
    },
  },
  {
    id: '372187d8-b85f-44f3-a939-701b190516b0',
    userId: 'b66cfc7c-be2c-41f5-b459-e888bfe881a2',
    departure: 'Kigali',
    destination: ['Musanze'],
    dateOfTravel: '2022-05-13T00:00:00.000Z',
    dateOfReturn: '2022-05-14T00:00:00.000Z',
    travelReason: 'This is travel reason in test',
    status: 'pending',
    createdAt: '2022-05-12T09:51:20.866Z',
    updatedAt: '2022-06-08T16:33:32.722Z',
    Accomodation: {
      id: 2,
      name: 'Silent Hill',
    },
  },
  {
    id: '5ded92bb-69c2-414c-8ad8-7c0f4096e9cc',
    userId: 'b66cfc7c-be2c-41f5-b459-e888bfe881a2',
    departure: 'Butare2',
    destination: ['Kigali2'],
    dateOfTravel: '2022-05-12T09:50:58.012Z',
    dateOfReturn: '2022-05-12T09:50:58.012Z',
    travelReason: 'Holidays',
    status: 'approved',
    createdAt: '2022-05-12T09:50:58.012Z',
    updatedAt: '2022-05-12T09:50:58.012Z',
    Accomodation: {
      id: 2,
      name: 'Silent Hill',
    },
  },
];
describe('Approve or reject atrip request', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      statistics: {
        dataType: 'status',
        data: state,
      },
    });
  });
  test('Should Render approve table page', async () => {
    render(<TripStatistics store={store} />);
    expect(screen.getByText('Total Trips')).toBeInTheDocument();
    expect(screen.getByText('Approved')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByText('Rejected')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('from'), { target: { value: '2022-09-09' } });
    fireEvent.change(screen.getByTestId('to'), { target: { value: '2000-05-05' } });
    fireEvent.click(screen.getByTestId('searchStat'));
    fireEvent.click(screen.getByTestId('new-trip'));
  });
});
