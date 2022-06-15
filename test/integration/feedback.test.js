import React from 'react';
import '@testing-library/jest-dom';
import { async } from 'regenerator-runtime';
import { render, fireEvent, screen } from '../jest.setup';
import Accommodation from '../../src/components/Accommodation';
import HomeUserView from '../../src/views/pages/HomeUserView';
import AccommodationCard from '../../src/components/Accommodation/AccommodationCard';

describe('Feedback', () => {
  test('should allow clicking on accommodation link', async () => {
    const { user } = render(<HomeUserView />, { route: '/dashboard/accommodation/4' });
    expect(screen.getByText('Accommodation')).toBeInTheDocument();
    expect(screen.getByTestId('Accommodation-link')).toBeInTheDocument();

    user.click(screen.getByTestId('Accommodation-link'));
  });

  test('Test fetch all accommodations', async () => {
    render(<Accommodation />, { route: '/dashboard/accommodation/4' });
  });
  
  test('Test fetch one accommodation', async () => {
    render(
      <AccommodationCard
        id="2"
        name="Grand Budapest"
        description="One of the oldest Hotels"
        location={['kigali', 'Rubavu']}
      />,
      { route: '/dashboard/accommodation/4' }
    );

    expect(await screen.findByText(/Grand/i)).toBeInTheDocument();
  });
});
