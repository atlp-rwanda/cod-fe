import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../jest.setup';
import NotificationPane from '../../src/components/NotificationPane';

describe('Testing connection', () => {
  it('should render notification pane', () => {
    render(<NotificationPane />);
    expect(screen.getByText('Open Notification pane')).toBeInTheDocument();
  });
});
