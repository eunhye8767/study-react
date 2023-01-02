import React, { useState } from "react";

// export default function List({
//   id, title, completed, todoData, setTodoData, provided, snapshot
// }) {
const List = React.memo(
  ({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    console.log("List is Rendering");

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    /**
   * 
   *  # App.js 으로 이동
      // filter 메소드를 사용 해 할일 목록 지우기
      const handleClick = (id) => {
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        let newTodoData = todoData.filter(data => data.id !== id);
        // console.log('newTodoData : ', newTodoData);

        // state를 바꿀 땐 setState
        setTodoData(newTodoData);
      }
   */

    // 체크 박스 클릭해서 완료 상태 바꾸기
    const handleCompleChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) data.completed = !data.completed;
        return data;
      });

      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };

    // editedTitle State 변경
    const handleEditChange = (e) => {
      setEditedTitle(e.target.value);
    };

    // editing 입력 후 Save
    const handleSubmit = (e) => {
      e.preventDefault();

      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }

        return data;
      });

      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
      setIsEditing(false);
    };

    // 조건에 따른 UI 렌더링
    if (isEditing) {
      return (
        <div className="flex items-center justify-between w-full px-4 py-1 my-2 bg-gray-100 text-gray-600 border rounded">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={editedTitle}
              className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
              onChange={handleEditChange}
              autoFocus
            />
          </form>

          <div className="items-center">
            <button
              className="float-right px-4 py-2"
              onClick={() => setIsEditing(false)}
            >
              x
            </button>

            {/* form 안에 없기 때문에 onClick 이벤트와 onSubmit 이벤트로 연결 */}
            <button
              type="submit"
              className="float-right px-4 py-2"
              onClick={handleSubmit}
            >
              save
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={id}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className={`
          ${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"}
          flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded
      `}
        >
          <div className="items-center">
            <input
              type="checkbox"
              id={`ck-${id}`}
              onChange={() => {
                handleCompleChange(id);
              }}
              defaultChecked={completed}
            />

            <label
              htmlFor={`ck-${id}`}
              className={`pl-2 ${completed && "line-through"}`}
            >
              {title}
            </label>
          </div>

          <div className="items-center">
            <button
              className="float-right px-4 py-2"
              onClick={() => handleClick(id)}
            >
              x
            </button>
            <button
              className="float-right px-4 py-2"
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
