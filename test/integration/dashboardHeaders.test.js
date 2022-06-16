import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../jest.setup';
import HomeUserView from '../../src/views/pages/HomeUserView';

describe('Fetch All Trip Requests', () => {
  test('Should Render Dashboard Header Component', async () => {
    render(<HomeUserView />);
    expect(screen.getByText(/\b(Home)\b/i)).toBeInTheDocument();
    expect(screen.getByTestId(/\b(notification-pane)\b/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('notification-pane'));
  });
});
