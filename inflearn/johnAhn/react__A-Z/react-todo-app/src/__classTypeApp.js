import React, { Component } from "react";
import "./App.css";

// Class 문법
export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  // 추후 동적으로 css를 변경해서 함수로 적용
  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed? "line-through" : "none",
    };
  };

  // 할 일 목록 데이터 만들기
  // todoData = [
  //   {
  //     id: "1",
  //     title: "공부하기",
  //     completed: true,
  //   },
  //   {
  //     id: "2",
  //     title: "청소하기",
  //     completed: false,
  //   },
  // ]
  state = {
    todoData : [
      {
        id: "1",
        title: "공부하기",
        completed: true,
      },
      {
        id: "2",
        title: "청소하기",
        completed: false,
      },
    ],
    value: "",
  }

  // filter 메소드를 사용 해 할일 목록 지우기
  handleClick = (id) => {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    let newTodoData = this.state.todoData.filter(data => data.id !== id);
    // console.log('newTodoData : ', newTodoData);

    // state를 바꿀 땐 setState
    this.setState({todoData : newTodoData});
  }

  // 글 입력시 state 변경
  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  // 입력 버튼 클릭 시
  // 목록에 추가, 입력란에 있던 value 지워주기
  handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌.
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    }

    // 새로운 할 일 데이터 더해주기
    this.setState( {
      todoData : [...this.state.todoData, newTodo],
      value: ""
    })
  }

  // 체크 박스 클릭해서 완료 상태 바꾸기
  handleCompleChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) data.completed = !data.completed;
      return data;
    })

    this.setState( { todoData : newTodoData });
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map(data => (
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
            <div style={this.getStyle(data.completed)} key={data.id}>
              <p>
                <input 
                  type="checkbox" 
                  onChange={ () => { this.handleCompleChange(data.id) } }
                  defaultChecked={data.completed} 
                />
                
                {" "}{data.title}
                
                <button style={this.btnStyle} 
                  onClick={ () => this.handleClick(data.id) }>x</button>
              </p>
            </div>
          ))}

          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit} autocomplete="off">
            <input 
              type="text"
              name="value"
              style={ { flex: '10', padding: "5px" }}
              placeholder="해야 할 일을 입력하세요"
              value={this.state.value}
              onChange={this.handleChange}
            />

            <input 
              type="submit" 
              value="입력"
              className="btn"
              style={ { flex: '1' }}
            />
          </form>
        </div>
      </div>
    );
  }
}
