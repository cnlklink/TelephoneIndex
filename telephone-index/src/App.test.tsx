import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('After launch, header is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/telephone index/i);
  expect(linkElement).toBeInTheDocument();
});
