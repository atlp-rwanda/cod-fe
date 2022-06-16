import React from 'react';
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
import { render, fireEvent, screen } from '../jest.setup';
import AddAccommodation from '../../src/components/Accommodation/newAccommodation/AddAccommodation';

describe('Add Accommodation Facility - Room', () => {
  test('Should Render New Room component', async () => {
    render(<AddAccommodation />);
    expect(screen.getByTestId('selectAccommodation')).toBeInTheDocument();
    const next = screen.getByText('Next');
    expect(next).toBeInTheDocument();
    fireEvent.click(next);
    await waitFor(() => {
      expect(screen.getByTestId('roomNumber')).toBeInTheDocument();
    });
    fireEvent.click(next);
    await waitFor(() => {
      expect(screen.getByTestId('addImage')).toBeInTheDocument();
    });
  });
});
