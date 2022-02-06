import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const headerText = screen.getByText(/abriel's movie poster creator/i);
  expect(headerText).toBeInTheDocument();
});
