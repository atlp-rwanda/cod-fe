import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from './jest.setup';
import HomeView from '../src/views/pages/HomeView';

describe('Render Landing Page', () => {
  test('Renders The Landing Page With All Components', async () => {
    render(<HomeView />, { route: '/' });
    expect(screen.getByTestId('headerContainer')).toBeInTheDocument();
    expect(screen.getByTestId('howItWorks')).toBeInTheDocument();
    expect(screen.getByTestId('section-destinations')).toBeInTheDocument();
    expect(screen.getByTestId('prevBtn-topDestination')).toBeInTheDocument();
    expect(screen.getByTestId('nextBtn-topDestination')).toBeInTheDocument();
    expect(screen.getByTestId('section-testimonials')).toBeInTheDocument();
    expect(screen.getByTestId('prevBtn-testimonials')).toBeInTheDocument();
    expect(screen.getByTestId('nextBtn-testimonials')).toBeInTheDocument();
  });
});
