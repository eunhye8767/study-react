import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { PageTitle } from 'components/atoms/PageTitle';
import { Button } from 'components/atoms/Button';
import { ToDoItem } from 'components/organisms/ToDoItem';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`;

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (todo: string) => void;
}

export const ToDoList = ({ toDoList, onDelete }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
        <PageTitle title="할 일 목록" />
        <ToDoListContainer>
          {toDoList.map((toDo) => (
            <ToDoItem
              key={toDo}
              label={toDo}
              onDelete={() => {
                if (typeof onDelete === 'function') onDelete(toDo);
              }}
            />
          ))}
        </ToDoListContainer>
      </Contents>
      <ButtonContainer>
        <Button label="할 일 추가" color="#304ffe" onClick={() => navigate('/add')} />
      </ButtonContainer>
    </Container>
  );
};
