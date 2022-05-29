import React from 'react';
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
import { render, fireEvent, screen } from '../jest.setup';
import HomeUserView from '../../src/views/pages/HomeUserView';
import Table from '../../src/components/tables/TripRequests';
import { columns } from '../../src/constants/reqColumns';

// given
const tripReqs = [
  {
    id: '8b5c35f7-0459-4dae-8d61-a443dc56258',
    userId: '861d7c9d-a8a8-4308-bce8-2c6c6a66c840',
    departure: 'Huye',
    destination: 'Huye',
    dateOfTravel: '2022-05-13T09:51:05.975Z',
    dateOfReturn: '2022-05-14T09:51:05.975Z',
    travelReason:
      'This is travel reason in testThis is travel reason in testThis is travel reason in testThis is travel reason in testThis is travel reason in test',
    status: 'approved',
    createdAt: '2022-05-12T09:51:20.590Z',
    updatedAt: '2022-05-25T09:13:23.347Z',
    Accomodation: 'Demo',
    lastname: 'User',
    imgUrl: 'https://flyclipart.com/thumb2/profile-icon-png-black-196391.png',
    User: {
      id: '861d7c9d-a8a8-4308-bce8-2c6c6a66c847',
      firstname: 'New Random',
      lastname: 'Person',
    },
  },
  {
    id: '8b5c35f7-0459-4dae-8d61-a443dc5625b6',
    userId: '861d7c9d-a8a8-4308-bce8-2c6c6a66c847',
    departure: 'Huye',
    destination: 'Huye',
    dateOfTravel: '2022-05-13T09:51:05.975Z',
    dateOfReturn: '2022-05-14T09:51:05.975Z',
    travelReason:
      'This is travel reason in testThis is travel reason in testThis is travel reason in testThis is travel reason in testThis is travel reason in test',
    status: 'rejected',
    createdAt: '2022-05-12T09:51:20.590Z',
    updatedAt: '2022-05-25T09:13:23.347Z',
    Accomodation: { name: 'D_emo' },
    lastname: 'User',
    imgUrl: 'D_emo',
    User: {
      id: '861d7c9d-a8a8-4308-bce8-2c6c6a66c847',
      firstname: 'New Random',
      lastname: 'Person',
    },
  },
];

describe('Fetch All Trip Requests', () => {
  test('Should Render Component after login', async () => {
    render(<HomeUserView />);
    expect(screen.getByText(/\b(Trip)\b/i)).toBeInTheDocument();
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'logo' })).toBeInTheDocument();
    expect(screen.getByText(/\b(Trip)\b/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    await waitFor(() => expect(spinner).not.toBeInTheDocument());
    waitFor(() => {
      expect(screen.findByTestId('tripReq-table'));
      expect(screen.getByTestId('search-table')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('5'));
      // expect(screen.getByRole('cell'));
      expect(screen.queryByText(/Kivu/i)).toBeInTheDocument();
      expect(screen.queryByText(/Serena/i)).toBeInTheDocument();
    });
  });

  describe('test Table', () => {
    test('Search, Prev & Next btn and sort', async () => {
      render(<Table trips={Array(11).fill(tripReqs[0]).concat(tripReqs[1])} columns={columns} />);
      //   const rows = screen.getAllByRole('cell');
      expect(screen.getByRole('option', { name: 'All' }).selected).toBe(true);
      expect(screen.queryByText(/D_emo/i)).not.toBeInTheDocument();
      fireEvent.click(screen.getByTestId('btn-next'));
      expect(await screen.findByText(/D_emo/i)).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('btn-prev'));
      expect(screen.queryByText(/D_emo/i)).not.toBeInTheDocument();
      fireEvent.change(screen.getByTestId('search-table'), {
        target: { value: tripReqs[1].Accomodation.name },
      });
      expect(await screen.findByText(/D_emo/i)).toBeInTheDocument();
      fireEvent.click(screen.getAllByTestId('tb-header')[0]);
      expect(screen.queryByText(/Demo/i)).not.toBeInTheDocument();
      expect(screen.getByTestId('review-button')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('review-button'));
      expect(screen.queryByTestId('delete-button')).not.toBeInTheDocument();
      fireEvent.click(screen.getByTestId('options-checkbox'));
      await waitFor(() => {
        expect(screen.getByTestId('delete-button')).toBeInTheDocument();
        expect(screen.getByTestId('edit-button')).toBeInTheDocument();
      });
    });
  });
});
