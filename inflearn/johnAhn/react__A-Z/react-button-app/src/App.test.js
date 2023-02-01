import { render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const countElement = screen.getByTestId("counter");
  expect(countElement).toHaveTextContent(0);
});
