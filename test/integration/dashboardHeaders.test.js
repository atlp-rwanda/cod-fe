import React from 'react';
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
import { render, fireEvent, screen } from '../jest.setup';
import HomeUserView from '../../src/views/pages/HomeUserView';

describe('Fetch All Trip Requests', () => {
  test('Should Render Dashboard Header Component', async () => {
    render(<HomeUserView />);
    expect(screen.getByText(/\b(Home)\b/i)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('profile'));
    expect(screen.getByTestId(/\b(notification-toggle)\b/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/\b(Sign out)\b/i)).toBeInTheDocument();
    });
  });
});
