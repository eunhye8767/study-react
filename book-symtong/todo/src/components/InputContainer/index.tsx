import { useState } from 'react';

import { TodoInput } from 'components/TodoInput';
import { ShowInputButton } from 'components/ShowInputButton';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

export const InputContainer = ({ onAdd }: Props) => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onAddToDo = (toDo: string) => {
    onAdd(toDo)
    setShowToDoInput(!showToDoInput)
  }

  return (
    <>
      {showToDoInput && <TodoInput onAdd={onAddToDo} />}
      <ShowInputButton 
        show={showToDoInput} 
        onClick={() => setShowToDoInput(!showToDoInput)} />
    </>
  );
};
