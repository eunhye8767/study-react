import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (접근할 때 ID로 접근)
  const countElement = screen.getByTestId("counter");
  // id가 counter인 엘리먼트의 텍스트가 0인지 테스트
  expect(countElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
})

test('plus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
})

test('when the + button is pressed, the counter change to 1', () => { 
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");

  // click plus button
  fireEvent.click(buttonElement);
  // 카운터가 0에서 +1로 되서 1이 된다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
})

test('when the - button is pressed, the counter change to 1', () => { 
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");

  // click plus button
  fireEvent.click(buttonElement);
  // 카운터가 2에서 -1로 되서 1이 된다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
})

test('on/off button has blue color', () => { 
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue"})
})