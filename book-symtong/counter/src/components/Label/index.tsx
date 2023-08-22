import styled from '@emotion/styled';

interface Props {
  readonly data: number;
}

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

export const Label = ({ data }: Props) => {
  return <Container>{data}</Container>;
};
