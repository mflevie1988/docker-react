import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi there!!!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Edit2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Edit/i);
  expect(linkElement).toBeInTheDocument();
});
