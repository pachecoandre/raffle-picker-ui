import { render, screen } from '@testing-library/react';
import AppRouter from './router/AppRouter';

test('renders sorteio de rifa link', () => {
  render(<AppRouter />);
  const linkElement = screen.getByText(/sorteio de rifa/i);
  expect(linkElement).toBeInTheDocument();
});
