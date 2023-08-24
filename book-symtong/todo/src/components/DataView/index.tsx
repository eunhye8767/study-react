import styled from '@emotion/styled';

import { Title } from 'components/Title';
import { ToDoList } from 'components/ToDoList';

interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (todo: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 32px;
  border-radius: 8px;
`;

export const DataView = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <ToDoList toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
};
