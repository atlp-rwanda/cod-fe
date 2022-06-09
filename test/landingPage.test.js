import React from 'react';
import '@testing-library/jest-dom';
import { userEvent } from '@storybook/testing-library';
import { render, screen } from './jest.setup';
import HomeView from '../src/views/pages/HomeView';

describe('Render Landing Page', () => {
  test('Renders The Landing Page With All Components', async () => {
    render(<HomeView />);
    expect(screen.getByTestId('headerContainer')).toBeInTheDocument();
    expect(screen.getByTestId('howItWorks')).toBeInTheDocument();
    expect(screen.getByTestId('section-destinations')).toBeInTheDocument();
    expect(screen.getByTestId('prevBtn-topDestination')).toBeInTheDocument();
    expect(screen.getByTestId('nextBtn-topDestination')).toBeInTheDocument();
    expect(screen.getByTestId('section-testimonials')).toBeInTheDocument();
    expect(screen.getByTestId('prevBtn-testimonials')).toBeInTheDocument();
    expect(screen.getByTestId('nextBtn-testimonials')).toBeInTheDocument();
  });
  test('Testing Header Links & Landing Page Components', async () => {
    render(<HomeView />);
    expect(screen.getByTestId('howItWorks')).toBeInTheDocument();
    const topDestinationPrevBtn = screen.getByTestId('prevBtn-topDestination');
    const topDestinationNextBtn = screen.getByTestId('nextBtn-topDestination');
    const testimonoialsPrevBtn = screen.getByTestId('prevBtn-testimonials');
    const testimonoialsNextBtn = screen.getByTestId('nextBtn-testimonials');
    expect(topDestinationPrevBtn).toBeInTheDocument();
    expect(topDestinationNextBtn).toBeInTheDocument();
    expect(testimonoialsPrevBtn).toBeInTheDocument();
    expect(testimonoialsNextBtn).toBeInTheDocument();
    userEvent.click(topDestinationPrevBtn);
    userEvent.click(topDestinationNextBtn);
    userEvent.click(testimonoialsPrevBtn);
    userEvent.click(testimonoialsNextBtn);
    const loginBtn = screen.getByRole('link', { name: /login/i });
    const signUpBtn = screen.getByRole('link', { name: /sign up/i });
    userEvent.click(loginBtn);
    userEvent.click(signUpBtn);
  });
});
