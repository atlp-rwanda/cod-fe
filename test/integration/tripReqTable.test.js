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
    Accomodation: 'Demo',
    destination: 'Huye',
    dateOfReturn: '4 July 2022',
    status: 'approved',
    imgUrl: 'https://flyclipart.com/thumb2/profile-icon-png-black-196391.png',
  },
  {
    Accomodation: { name: 'D_emo' },
    destination: 'Huye',
    dateOfReturn: '4 July 2022',
    status: 'rejected',
    imgUrl: 'D_emo',
  },
];

describe('Fetch All Trip Requests', () => {
  test('Should Render Component after login', async () => {
    render(<HomeUserView />);
    expect(screen.getByText(/Trip/i)).toBeInTheDocument();
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'logo' })).toBeInTheDocument();
    expect(screen.getByText(/Trip/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
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
      fireEvent.click(screen.getAllByTestId('tb-header')[0]);
      expect(screen.queryByText(/Demo/i)).not.toBeInTheDocument();
    });
  });
});
