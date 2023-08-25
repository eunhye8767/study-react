import styled from '@emotion/styled';
import { Button } from 'components/Button';

interface Props {
  readonly show: boolean;
  readonly onClick: () => void;
}

const Container = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

export const ShowInputButton = ({ show, onClick }: Props) => {
  return (
    <Container>
      <Button
        label={show ? '닫기' : '할 일 추가'}
        color={show ? undefined : '#304ffe'}
        onClick={onClick}
      />
    </Container>
  );
};
