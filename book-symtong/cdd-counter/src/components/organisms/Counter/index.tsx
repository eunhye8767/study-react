import styled from '@emotion/styled';

import { Button } from 'components/atoms/Button';
import { Count } from 'components/atoms/Count';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Counter = () => {
  const [count, setCount] = useState(0);

  const calculator = (number: number, plus: boolean) => {
    if (plus) {
      // 더하기
      setCount(number + 1);
    } else {
      // 빼기
      if (number <= 0) return;
      setCount(number - 1);
    }
  };

  return (
    <Container>
      <Button label="-" onClick={() => calculator(count, false)} />
      <Count value={count} />
      <Button label="+" onClick={() => calculator(count, true)} />
    </Container>
  );
};
