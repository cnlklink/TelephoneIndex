import { render, screen } from '@testing-library/react';
import App from './App';

test('Given nothing, when launched, then the header is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/Telephone Index/i);
  expect(linkElement).toBeInTheDocument();
});
