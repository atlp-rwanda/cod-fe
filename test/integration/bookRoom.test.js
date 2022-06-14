import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../jest.setup';
import Rooms from '../../src/components/Accommodation/Rooms';




describe('Authentication', () => {
  test('Should load Rooms in an accommodation', async () => {
    render(<Rooms />);

  });

});
