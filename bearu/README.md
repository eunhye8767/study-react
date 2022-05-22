## BEAR U
<hr />

<br />
<br />

### defaultProps
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

### 'children'으로 하위 컴포넌트 불러오기
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

### state 활용
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