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

