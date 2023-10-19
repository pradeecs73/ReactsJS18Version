import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {fireEvent, screen} from '@testing-library/react'


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Posts/i);
  expect(linkElement).toBeInTheDocument();
});
