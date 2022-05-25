# BEAR U
<br />

## defaultProps
- props(프롭스) 기본값을 정의.
```javascript
// App.js
function App() {
  return <Hello />
}

// Hello.js
// 받아오는 porps.name이 없을 때 에러 발생
function Hello({name}) {
  return <h1>Hello, {name}</h1>
}

// 이럴 때, 기본 props 값을 정의해주는 것이 defaultProps
Hello.defaultProps = {
  name: 'React!'
}

export default Hello;
```
<br />
<br />

## 'children'으로 하위 컴포넌트 불러오기
- 감싸는 컴포넌트(ex. Wrapper)가 `{children}`을 넣어줘야 하위요소를 감싸준다.
```javascript
// Wrapper.js
function Wrapper({children}) {
  return <div></div>
}

// Hello.js
function Hello({name}) {
  return <h1>Hello, {name}</h1>
}

// App.js
function App() {
  return (
    <Wrapper>
      <Hello name="HaHa" />
      <Hello name="HaHa" />
    </Wrapper>
  )
}
```
<br />
<br />

## state 활용
```javascript
// Input.js
function Input () {
  const [inputs, setInputs] = useState({
    subject: "",
    score: "",
  })

  // input에 입력한 값으로 체인지 함수
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      // 객체 값을 변경할 땐, 항시 복사를 먼저 한 후에 수정해야 한다.
      ...inputs,
      // name만 써주게되면 string으로 인식이 되기 때문에 []로 표시 한다.
      [name] : value
    })
  }

  return (<div>
    <h2>성적: {inputs.subject} {inputs.score}</h2>
    <input type="text" name="subject" placeholder="수학" value={inputs.subject} onChange={onChange} />
    <input type="text" name="score" placeholder="99" value={inputs.score} onChange={onChange} />
  </div>)
}
```
<br />

## Hook
### 라이프사이클 (lifecycle, 컴포넌트의 생명주기)
![react-lifecycle-diagram](./imgs/hook-lifecycle.png)
- 리액트 라이프 사이클 다이어그램 : [자세히보기](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
<br />

- Mounting > Updating > Unmounting 순으로 진행이 된다.
- 페이지 안에서는 위에서 아래 방향으로 진행이 된다.
- **constructor** : 컴포넌트가 생겨나는 과정을 의미한다. (== 함수를 정의할 때 생겨난다)
- **render (렌더링)** : DOM에 등록을 하기 전에 렌더링 과정을 거친다. 브라우저에 DOM에 어떤 객체가 들어가서 브라우저 화면에 나타나도록 하는 것.
- 렌더링이 진행이 되면서 Updating 페이지가 함께 진행이 된다. 
- **Updating** : 업데이팅 페이지에서 하는 일은 함수에서 갖고 있는 props, state 값을 이용해서 리턴하고 있는 jsx 컴포넌트의 값을 업데이트 해준다.
- 하나의 컴포넌트 등록과 값이 업데이트 되는 렌더링을 모두 거친다.
- 리액트에서는 브라우저의 DOM에 컴포넌트를 업데이트 한다.
- 사용하다가 컴포넌트가 필요없어지게 된다면 **Unmounting** 페이지를 거쳐서 사라지게 된다.
<br />

### render 페이지와 commit 페이지
- **render 페이지** : 리액트에서 관리.
- **commit 페이지** : 브라우저에 나타나는 부분.
<br />
<br />


## useEffect
- 페이지가 로딩될 때 작동하는 Hook.
- 자동으로 호출이 되는 훅 => **useEffect**.
- 컴포넌트가 마운트가 되고 DOM이 변경이 된 다음, 렌더링이 일어난 다음 useEffect가 실행이 된다.

### useEffect 언제 필요할 까?
- **props 속한 값을 컴포넌트의 로컬 변수로 선언한 경우 :**,<br />컴포넌트의 로컬 변수가 props로 부터 오는 경우에 useEffect에서 할당.
- **외부 api를 호출해서 통신을 통해 어떤 값을 받아오거나 받아온 값을 state로 넣어주는 경우**
- **3rd party(써드파티) 라이브러리를 써서 무언가 다른 작업들을 해줘야 할 때**<br />* 3rd party(써드파디) 라이브러리란? 제 3자 라이브러리. 개인 개발자나 프로젝트 팀 혹은 업체 등에서 개발한 라이브러리.
- **렌더링이 다 되면, 화면에는 요소들이 다 나타나고 그 다음에 다시 한 번 데이터를 변경하는 그런 작업들을 useEffect가 한다.**

### useEffect 예제
```javascript
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");

    // 브라우저 타이틀 변경
    document.title = "You Clicked ${count} times";
  });
  return (
    <>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          console.log("click");
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </>
  );
}

export default App;
```
<br />
<br />

## useHistory
- `npm install react-router-dom` :<br />서로 다른 페이지로 이동할 떄 주로 쓰는 기능을 모아둔 패키지.
```javascript
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      // to에 명시된 페이지로 이동.
      <Link to ="/home">Home</Link>

      <Routes>
        // 현재 경로에 맞는 컴포넌트를 보여준다.
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  let navigate = useNavigate();
  function handleClick() {
    // 입력받은 경로로 이동이 된다.
    navigate("/home");
  }
  return (
    <>
      <h2>Index</h2>
      <button onClick={handleClick}>Go to Home</button>
    </>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2>
      <p>This is home</p>
    </>
  );
}

export default App;
```
<br />
<br />
