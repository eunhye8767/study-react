import styled from '@emotion/styled';

interface ContainerProps {
  readonly color: string;
}

interface Props {
  readonly label: string;
  readonly color?: string;
  readonly onClick?: () => void;
}

const Container = styled.button<ContainerProps>`
  padding: 8px 16px;
  background: ${(props) => props.color};
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ff5772;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = ({ label, color = '#ff5772', onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};
