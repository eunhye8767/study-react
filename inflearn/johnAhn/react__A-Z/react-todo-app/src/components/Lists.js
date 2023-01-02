import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';

// export default function Lists({ todoData, setTodoData }) {
const Lists = React.memo(({ handleClick, todoData, setTodoData }) => {
  console.log("Lists is Rendering");

  // const btnStyle = {
  //   color: "#fff",
  //   border: "none",
  //   padding: "5px 9px",
  //   borderRadius: "50%",
  //   cursor: "pointer",
  //   float: "right",
  // };

  // 추후 동적으로 css를 변경해서 함수로 적용
  // const getStyle = (completed) => {
  //   return {
  //     padding: "10px",
  //     borderBottom: "1px #ccc dotted",
  //     textDecoration: completed? "line-through" : "none",
  //   };
  // };

  // DragDropContext DrageEnd 이벤트
  const handleEnd = (result) => {
    /**
     *  result 매개변수에는 source 항목 및 대상 위치와 같은 
     *  드래그 이벤트에 대한 정보가 포함된다.
     */
    console.log(result)

    // 목적지가 없으면(이벤트 취소) 이 함수를 종료한다.
    if (!result.destination) return;

    // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
    const newTodoData = todoData;

    /**
     *  1. 변경시키는 아이템을 배열에서 지워준다
     *  2. return 값으로 지워진 아이템을 잡아준다.
     * 
     *  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     */
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    // 원하는 자리에 reorderedItem을 insert 해준다.
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="to-dos">
          {(provided) => (
            // provided 정보와 ref를 적용한다.
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                /**
                 * key 값은 index 값이 아닌 유니크한 값으로 적용
                 *  ㄴ index 값으로 적용했을 때, 
                 *     변경(수정/추가) 시, 새로 맨 앞에 들어온 리스트가 
                 *     그 전에 있던 index를 key값으로 가져가게 된다.
                 * 
                 *     ** 원본
                 *     <li key="0">1</li>
                       <li key="1">2</li>
  
                  *     ** 변경(수정/추가) 했을 때
                  *     <li key="0">3</li>
                        <li key="1">1</li>
                        <li key="2">2</li>
                  */

                /**
                 *  map 이기 때문에 Draggable 태그에 key 값을 적용한다.
                 *  draggableId와 index 값을 적용한다.
                 */
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    /**
                     *  map 이기 때문에 key 값을 적용한다.
                     *  provided의 props를 적용한다 (정보가 있어야 드래그 앤 드롭이 가능하다.)
                     *    ㄴ draggableProps, dragHandleProps
                     * 
                     *  snapshot.isDragging을 기준으로 
                     *  드래그 할 때, 하지 않았을 때 클래스 값을 적용한다.
                     */
                    <List
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                      handleClick={handleClick}
                     />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
});

export default Lists;