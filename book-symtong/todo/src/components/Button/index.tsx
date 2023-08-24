import styled from '@emotion/styled';

interface Props {
  readonly label: string;
  readonly onClick: () => void;
}

const Container = styled.button`
  padding: 8px 16px;
  background: #ff5772;
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

export const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};
