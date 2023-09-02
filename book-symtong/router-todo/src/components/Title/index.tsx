import styled from '@emotion/styled';

interface Props {
  readonly label: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.h1`
  mask-type: 0;
`;

export const Title = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};
