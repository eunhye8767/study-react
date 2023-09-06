import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 800px;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow:
    10px 10px 30px #d9d9d9,
    -10px -10px 30px #fff;
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Body = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface Props {
  readonly title: string;
  readonly body: string;
}

export const BlogPost = ({ title, body }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};
