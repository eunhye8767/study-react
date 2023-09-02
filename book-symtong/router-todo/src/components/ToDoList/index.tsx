import { useContext } from 'react';

import styled from '@emotion/styled';

import { TodoItem } from 'components/ToDoItem';
import { ToDoListContext } from 'contexts/ToDoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToDoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);
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
