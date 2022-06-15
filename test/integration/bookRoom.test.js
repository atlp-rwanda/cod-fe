import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../jest.setup';
import Rooms from '../../src/components/Accommodation/Rooms';
import HomeUserView from '../../src/views/pages/HomeUserView';
import Room from '../../src/components/Accommodation/Room';

jest.useFakeTimers();

describe('Rooms', () => {
  test('Should load Rooms', async () => {
    const route = '/dashboard/accommodation/4?tripId=5ded92bb-69c2-414c-8ad8-7c0f4096e9cc';
     const {user} =   render(<HomeUserView />);
      expect(screen.getByText('Accommodation')).toBeInTheDocument();
      expect(screen.getByTestId('Trips-link')).toBeInTheDocument();

      fireEvent.click(screen.getByTestId('Trips-link'));
    });
  

    test('Should load Rooms', async () => {
      const route = '/dashboard/accommodation/4?tripId=5ded92bb-69c2-414c-8ad8-7c0f4096e9cc';
      render(<Rooms />, { route });
      expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    test('Should load one Room', async () => {
      render(
        <Room
          id="2"
          roomNumber="4"
          description="room in testing"
          tripId="5ded92bb-69c2-414c-8ad8-7c0f4096e9cc"
        />
      );
      expect(await screen.findByText(/Book/i)).toBeInTheDocument();
      expect(await screen.findByText(/room in testing/i)).toBeInTheDocument();
  
    });
});
