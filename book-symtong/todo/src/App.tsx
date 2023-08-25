import { useState } from 'react';

import styled from '@emotion/styled';

import { DataView } from 'components/DataView';
import { TextInput } from 'components/TextInput';
import { Button } from 'components/Button';

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

  const [toDo, setToDo] = useState('');

  const onAdd = () => {
    if (toDo === '') return;

    setToDoList([...toDoList, toDo])
  }

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setToDo} />
      <Button label="추가" color='#304ffe' onClick={onAdd} />
    </Container>
  );
}

export default App;
