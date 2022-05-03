# __inflearn
https://eunhye8767.github.io/__inflearn/

## 1. React Router v6 업데이트 정리
[블로그 원본 내용](https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC)

### 1.1. React Router v6 정식 릴리즈
React Router v6가 정식으로 릴리즈 되었다. [공식문서](https://reactrouter.com/docs/en/v6/upgrading/v5)

<br />
<br />

### 1.2. Switch가 사라지고, Routes 등장
- Routes는 기존 Switch 처럼 경로를 순서를 기준으로 선택하는 것이 아닌, 가장 일치하는 라우트를 기반으로 선택하게 된다.
- Routes로 기존 Switch의 기능을 대체 가능
<br />

#### 기존코드
```javascript
<Switch>
  <Route path="/" ..... />
</Switch>
```

#### v6 코드
```javascript
<Routes>
  <Route path="/" .....  />
</Routes>
```

<br />
<br />

### 1.3. useHistory가 사라지고, useNavigate 등장
- useNavigate로 기존에 useHistory의 기능을 전부 대체 가능
- useHistory의 history는 객체였지만 useNavigate의 navigate는 함수다.
<br />

#### 기존코드
```javascript
const history = useHistory();

history.push('/');
history.goback();
history.go(-2);
history.push(`/user/${user._id}`);
```

#### v6 코드
```javascript
const navigate = useNavigate();

navigate('/');
navigate(-1);
navigate(-2);
navigate(`/user/${user._id}`);
```

<br />
<br />

### 1.4. useRouteMatch가 사라짐 대신에 상대 경로를 쓸 수 있게 됨
- 상대 경로를 사용할 수 있게되면서 굳이 useRouteMatch를 쓸 필요가 없어짐.
<br />

#### 기존코드
```javascript
const match = useRouteMatch();
console.log(match); // { path: '/', url: '/', isExact: true, params: {} }
<Link to={match.url} />; // 현재 url 로 이동
<Link to={`${match.url}/about`}>; // 현재 url에 /about을 붙인곳으로 이동

<Route path={match.patch} exact />
<Route path={`${match.patch}/about`} />
```

#### v6 코드
```javascript
// 이렇게 입력시 현재 페이지로 이동
<Link to="" />;

// 이렇게 입력시 현재 url에 /about을 붙인 곳으로 이동 
// *단 about앞에 /about을 붙이게되면 진짜 /about으로 이동되니 현재 기준으로 하려면 앞에 슬래쉬를 빼줘야함
<Link to="about">;

<Route path="" exact />
<Route path="about" />
```

<br />
<br />

### 1.5. Route에 children이나 component가 사라지고, 대신에 element 사용
#### 기존코드
```javascript
<Route path="/" exact component={HomePage} />
<Route path="/login" exact>
    <LoginPage />
</Route>
```

#### v6 코드
```javascript
<Route path="/" exact element={<HomePage />} />
<Route path="/login" exact element={<LoginPage />} />
```

<br />
<br />

### 1.6. 기존 Route는 꼭 Switch 안에 없어도 됐지만, v6의 Route는 Routes의 직속 자식이어야 함
#### 기존코드
```javascript
<Route path="/" exact component={HomePage} />
<Route path="/login" exact>
    <LoginPage />
</Route>
```

#### v6 코드
```javascript
<Routes>
  <Route path="/" exact element={<HomePage />} />
  <Route path="/login" exact element={<LoginPage />} />
</Routes>
```

<br />
<br />

### 1.7. Route에 exact Prop 사라짐(exact가 기본으로 되어있음)
#### 기존코드
```javascript
<Route path="/login" exact component={UsersPage} />
```

#### v6 코드
```javascript
<Route path="/login" element={<UsersPage />} />
```

<br />
<br />

### 1.8. 서브 경로가 필요한 경우 path에 * 사용
#### 기존코드
```javascript
<Route path="/users/:username" component={UsersPage} />
```

#### v6 코드
```javascript
<Route path="/users/:username/*" element={<UsersPage />} />
```

<br />
<br />

### 1.9. Optional URL 파라미터 사라짐. 필요하면 Route 2개 만들어야 함
#### 기존코드
```javascript
<Route path="/optional/:value?" component={Optional} />
```

#### v6 코드
```javascript
<Route path="/optional/:value?" element={<Optional />} />
<Route path="/optional" element={<Optional />} />
```

<br />
<br />

### 1.10. 서브 라우트를 구현하는 또 다른 방법 Outlet
#### 기존코드
- App.js
```javascript
<Route path="/users/:username" component={UsersPage} />
```

- UserPage.js
```javascript
<Route path="/users/:username" component={UserMain} />
<Route path="/users/:username/about" component={About} />
```


#### v6 코드
- App.js
```javascript
<Route path="/users/:username/*" element={<UsersPage />}>
  <Route path="" element={<UserMain />} />
  <Route path="about" element={<About />} />
</Route>
```

- UserPage.js
```javascript
<Outlet />
```

<br />
<br />

### 1.11. NavLink에 activeStyle, activeClassName 사라짐
#### 기존코드
```javascript
<NavLink to="/messages" style={{ color: "blue"}} activeStyle={{ color: "green"}}>
    Messages
</NavLink>

<NavLink to="/messages" className="nav-link" activeClassName="activated">
    Messages
</NavLink>
```

#### v6 코드
```javascript
<NavLink to="/messages" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>
  Messages
</NavLink>

<NavLink to="/messages" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "") }>
    Messages
</NavLink>
```