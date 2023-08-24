import styled from '@emotion/styled';
import { TodoItem } from 'components/ToDoItem';

interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (todo: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToDoList = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      {toDoList.map((todo) => {
        return (
          <TodoItem
            key={todo}
            label={todo}
            onDelete={() => {
              if (typeof onDelete === 'function') onDelete(todo);
            }}
          />
        );
      })}
    </Container>
  );
};
