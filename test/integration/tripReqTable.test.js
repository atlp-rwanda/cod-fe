import React from 'react';
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen } from '../jest.setup';
import { columns } from '../../src/constants/reqColumns';
import MenuList from '../../src/components/SideBar/MenuList';
import Trip from '../../src/components/Trips';
import Table from '../../src/components/tables/TripRequests';

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

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return {
    user: userEvent.setup(),
    ...render(ui),
  };
};

describe('Fetch All Trip Requests', () => {
  test('Should Render Component after login', async () => {
    render(<MenuList />);
    expect(await screen.findByText(/Trips/i)).toBeInTheDocument();
  });
  test('Should Render Trips', async () => {
    render(<Trip />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
  test('Should Render Table', async () => {
    render(<Table columns={columns} trips={Array(11).fill(tripReqs[0]).concat(tripReqs[1])} />);
    expect(screen.getByText(/(Details)/i)).toBeInTheDocument();
    waitFor(() => {
      expect(screen.findByTestId('tripReq-table'));
      expect(screen.getByTestId('search-table')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('5'));
    });
    fireEvent.click(screen.getByTestId('5'));
    fireEvent.click(screen.getByTestId('search-menu'));
    fireEvent.change(screen.getByTestId('search-table'), {
      target: { value: 'Kivu' },
    });
  });

  describe('test Table', () => {
    test('Search, Prev & Next btn and sort', async () => {
      render(<Table trips={Array(11).fill(tripReqs[0]).concat(tripReqs[1])} columns={columns} />);
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

      expect(screen.queryByTestId('delete-button')).not.toBeInTheDocument();
      fireEvent.click(screen.getByTestId('options-checkbox'));
      await waitFor(() => {
        expect(screen.getByTestId('delete-button')).toBeInTheDocument();
        expect(screen.getByTestId('view-button')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('view-button'));
      });
    });
  });
});
