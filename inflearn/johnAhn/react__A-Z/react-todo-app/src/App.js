import React, { useCallback, useState } from "react";
import "./App.css";

import Lists from "./components/Lists";
import Form from "./components/Form";

// Class 문법
const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];

export default function App() {
  console.log("App is Rendering");

  // 할 일 목록 데이터
  const [todoData, setTodoData] = useState(initialTodoData);

  // 데이터 입력값
  const [value, setValue] = useState("");

  // filter 메소드를 사용 해 할일 목록 지우기
  const handleClick = useCallback((id) => {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    let newTodoData = todoData.filter(data => data.id !== id);
    // console.log('newTodoData : ', newTodoData);

    // state를 바꿀 땐 setState
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  }, [todoData]);

  // 입력 버튼 클릭 시
  // 목록에 추가, 입력란에 있던 value 지워주기
  const handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌.
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    }

    // 새로운 할 일 데이터 더해주기
    // setter에서 이전 state를 가지고 오기 위해서는 인수에 함수를 이용해서 사용할 수 있다.
    // (이전 state === prev)
    setTodoData(prev => [...prev, newTodo]);

    // ...prev 경우, 기존 데이터로 ...todoData로 대체 적용한다.
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
    setValue("");
  }

  // 할일 리스트 모두 지우기
  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>

        <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData} />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
