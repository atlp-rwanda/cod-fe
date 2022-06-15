import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../jest.setup';
import Rooms from '../../src/components/Accommodation/Rooms';
import HomeUserView from '../../src/views/pages/HomeUserView';
import Room from '../../src/components/Accommodation/Room';

jest.useFakeTimers();

describe('Feedback', () => {
   render(<HomeUserView />, { route: '/dashboard/accommodation/4' });
});
