import { useState } from 'react';

import styled from '@emotion/styled';

import { DataView } from 'components/DataView';
import { TodoInput } from 'components/TodoInput';
import { ShowInputButton } from 'components/ShowInputButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #eee;
`;

function App() {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '타입스크립트와 리액트',
    '공부를 해야겠지요',
  ]);
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
    setShowToDoInput(false);
  };

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      {showToDoInput && <TodoInput onAdd={onAdd} />}
      <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)} />
    </Container>
  );
}

export default App;
