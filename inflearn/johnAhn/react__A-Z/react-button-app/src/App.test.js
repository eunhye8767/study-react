import { render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (접근할 때 ID로 접근)
  const countElement = screen.getByTestId("counter");
  // id가 counter인 엘리먼트의 텍스트가 0인지 테스트
  expect(countElement).toHaveTextContent(0);
});


