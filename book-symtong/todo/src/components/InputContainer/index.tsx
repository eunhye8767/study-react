import { useState, useContext } from 'react';

import { ToDoInput } from 'components/ToDoInput';
import { ShowInputButton } from 'components/ShowInputButton';
import { ToDoListContext } from 'contexts/ToDoList';

export const InputContainer = () => {
  const { onAdd } = useContext(ToDoListContext);
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = (toDo: string) => {
    onAdd(toDo);
    setShowToDoInput(!showToDoInput);
  };

  return (
    <>
      {showToDoInput && <ToDoInput onClose={onClose} />}
      <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)} />
    </>
  );
};
