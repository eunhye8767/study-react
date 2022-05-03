# 만들면서 배우는 리액트 : 기초
- [인프런 - 진유림 강사](https://www.inflearn.com/course/%EB%A7%8C%EB%93%A4%EB%A9%B4%EC%84%9C-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88/dashboard)

## 0. 인트로
### 0.1. 프로젝트 개발환경 설정하기
- [VS Code](https://code.visualstudio.com/)
- [깃헙 소스 코드1](https://github.com/milooy/cat-jjal-maker)
- [깃헙 소스 코드2](https://github.com/milooy/cat-jjal-maker/blob/main/answers/2-setup.html)

<br />
<br />
<br />

## 1. 리액트가 왜 좋은가요?
### 1.1. 리액트 CDN으로 적용
- [리액트 문서, 자세히보기](https://ko.reactjs.org/docs/add-react-to-a-website.html)
- [리액트 라이브러리 설치없이 CDN 방식으로 적용하는 방법, 자세히보기](https://ko.reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)
    ```html
    <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel">
        // type="text/babel"을 적용하면 JSX 문법으로 작성할 수 있다.
    </script>
    ```

<br />
<br />

### 1.2. Babel
- [바벨 공식 사이트, 바로가기](https://babeljs.io/)
    - **바벨(Babel)은** 브라우저가 이해할 수 있는 자바스크립트로 변환(구 버전 호환 + 다른 언어 번역을 해주는 컴파일러).
    - **바벨(Babel)은** 최신 또는 구식 브라우저환경에서 ECMAScript 2015+ 코드를 호환 가능한 JavaScript 버전으로 변환하는 데 주로 사용되는 자바스크립트 컴파일러.<br />또, 입력과 출력 모두 자바스크립트 코드인 컴파일러.
- 참고 파일 : `answers/6-react-tasting.html`

<br />
<br />

### 1.3. JSX로 HTML과 Javascript 짬뽕하기
- 참고 파일 : `answers/7-jsx.html`, `/answers/8-jsx-quiz-answer.html`
- `{ }`를 사용하여 변수를 적용한다.
    ```javascript
    const catItem = (
        <li>
          <img src="https://cataas.com/cat/60b73094e04e18001194a309/says/react" />
        </li>
    );
    const FOO = "hello world";
    function foo() {
        return 1;
    }
    const favorites = (
        <ul class="favorites">
            { catItem }
            { catItem }
            { catItem }

            // 삼항연산자를 이용할 수 있다.
            { FOO === "hello world" ? 'true' : 'false' }

            // 자바스크립트 표현식을 사용하여 값을 출력할 수 있다
            { foo() } // => 1을 출력한다.
        </ul>
    );
    ```
- **리액트는 최상위 요소가 단 1개여야만 한다.**
    - `<div>`처럼 단 1개의 요소로만 감싸져야 한다.
    ```javascript
    const app = {
        <div>
            { mainCard }
            { favorites }
        </div>
    }
    ```

<br />
<br />
<br />

## 2. 리액트 앱  바닥부터 만들기
### 2.1. 컴포넌트가 뭔가요?
- 참고 파일 : `answers/9-what-is-component.html`
- 컴포넌트 : 컴포넌트(Component)란 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈.
- [리액트 UI 라이브러리 - Ant Design](https://ant.design/)<br />: Ant Design은 알리바바 그룹에서 개발한 UI 프레임워크 이다. 현실적인 UX 디자인으로 Button, Grid, Layout, Form 다양한 컴포넌트를 지원하고 있다.
<br />

- 리액트 컴포넌트 예 : HTML 태그처럼 사용이 가능
    ```javascript
    function Card(title, description) {
        return (
            <div>
                <h2>{title}</h2>
                {description}
            </div>
        )
    }
    <Card title='타이틀' description='설명' />  
    ```
<br />
<br />

### 2.2. 컴포넌트 만들기
- 참고 파일 : `answers/10-making-component.html`
- 컴포넌트 함수는 **무조건 대문자**로 시작한다. => `function CatItem() {}`
- 리액트에서 인자로 넘기는 것을 `props` 라고 한다.
    - `<CatItem />` => `props로 넘기는 데이터 이름="props로 넘길 데이터"`<br />`function CatItem(props) {}` => `<img src={props.img} />`
    - `img` => props에 넘기는 데이터 이름<br />`https://cataas.com//~~` => props로 넘길 데이터
    - `{props.img}` => `img`로 넘긴 데이터 이름으로 받은 데이터(`https://cataas.com//~~`)가 적용이 된다.
    ```javascript
    function CatItem(props) {
        return (
          <li>
            <img src={props.img} />
          </li>
        );
      }

    function Favorites() {
        return (
            <ul class="favorites">
                <CatItem img="https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn" />
                <CatItem img="https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript" />
            </ul>
        );
    }
    ```
- 화살표 함수로 컴포넌트를 생성할 수 있다.
    ```javascript
    const MainCard = () => {
        return (
          <div class="main-card">
            <img
              src="https://cataas.com/cat/60b73094e04e18001194a309/says/react"
              alt="고양이"
              width="400"
            />
            <button>🤍</button>
          </div>
        );
      };
    ```
- 내용으로 적용한 것도 `props`로 전달할 수 있다.
    - `console.log(props)` => 콘솔창에서 가져온 props 정보를 확인할 수 있다.
    - Title 경우, 콘솔창에서 보면 `children`으로 해당 데이터 내용이 불러와지는 것을 확인할 수 있다.
    ```javascript
    const Title = (props) => {
        // console.log(props)
        return <h1>{props.children}</h1>;
    };

    const app = (
        <div>
          <Title>1번째 고양이 가라사대</Title>
        </div>
    );
    ```
- 화살표 함수에서 `{ return () }`을 return 없이 아래와 같이 사용할 수 있다.
    ```javascript
    const Form = () => (
        <form>
            <input
                type="text"
                name="name"
                placeholder="영어 대사를 입력해주세요"
            />
            <button type="submit">생성</button>
        </form>
    )
    ```
<br />
<br />

### 2.3. ES6+ 디스트럭처링 문법 (props 예시)
- 참고 파일 : `answers/10-making-component.html`
- [구조분해문법(Destructuring) 자세히보기](https://joshua1988.github.io/vue-camp/es6+/destructuring.html)
<br />

- **디스트럭처링 문법 사용 전**
```javascript
const MainCard = (props) => {
    return (
        <div class="main-card">
            <img src={props.img} alt="고양이" width="400" />
            <button>🤍</button>
        </div>
    );
};
```
- **디스트럭처링 문법 사용 후**
```javascript
const MainCard = ({img}) => {
    return (
        <div class="main-card">
            <img src={img} alt="고양이" width="400" />
            <button>🤍</button>
        </div>
    );
};
```
<br />
<br />

### 2.4. 스타일링
- 참고 자료 : `answers/12-styling.html`
<br />

- 리액트에서는 `class`가 아닌 `className`을 사용한다.<br />`<div class="main-card">` => `<div className="main-card">`
- inLine style은 `style= {}`처럼 오브젝트로 적용한다. 다수를 적용할 땐 `,`로 구분하여 적용한다.<br />`<img src={props.img} style={{ width: "150px", border: "1px solid red" }} />`
<br />

- 최근 유행 중인 css 라이브러리 : [Emotion](https://emotion.sh/docs/introduction#react)
    - `npm i @emotion/react` 으로 설치하여 사용한다.
    - `css = { css``}` 형식으로 사용한다.
    ```javascript
    // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
    /** @jsx jsx */
    import { css, jsx } from '@emotion/react'

    const color = 'white'

    render(
    <div
        css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
            color: ${color};
        }
        `}
    >
        Hover to change color.
    </div>
    )
    ```
    <br />

    - `npm i @emotion/styled @emotion/react` 스타일 컴포넌트 방식으로도 사용이 가능하다.
    ```javascript
    import styled from '@emotion/styled'

    const Button = styled.button`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        color: black;
        font-weight: bold;
        &:hover {
            color: white;
        }
    `

    render(<Button>This my button component.</Button>)
    ```
    <br />

- ToyProject에서 사용되는 [Tailwind CSS](https://tailwindcss.com/) 라이브러리.<br />미리 정해둔 클래스를 `className`에 적용한다.
<br />
<br />

### 2.5. 이벤트 다루기
- 참고 자료 : `answers/13-event.html`
- [event.preventDefault() MDN 문서](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault)
<br />

- 클릭이벤트 => `onClick={함수명}`<br />마우스 오버 => `onMouseOver={함수명}` 
    ```javascript
    const MainCard = ({ img }) => {
        function handleHeartClick() {
          console.log("하트 눌렀음");
        }
        function handleHeartMouseOver() {
          console.log("하트 스쳐 지나감");
        }
        return (
          <div className="main-card">
            <img src={img} alt="고양이" width="400" />
            <button
              onClick={handleHeartClick}
              onMouseOver={handleHeartMouseOver}
            >
              🤍
            </button>
          </div>
        );
    };
    ```
<br />

#### 리액트 관례
- 리액트에서는 이벤트 핸들러 함수명을 지을 때 `handle`로 시작하여 짓는 것이 관례이다.<br />(onClick, onMouseOver, onSubmit 이벤트 등)
    ```javascript
    function handleHeartClick() {
        console.log("하트 눌렀음");
    }
    function handleHeartMouseOver() {
        console.log("하트 스쳐 지나감");
    } 
    ```         
<br />
<br />

### 2.6. useState로 상태 만들기
- 참고 자료 : `answers/14-state.html`
- 생성 버튼을 클릭할 때마다 ??번째로 표시하고 `useState`를 이용한다.
- `useState` => `[변수A, 변수A를 조작하는 인자] = React.useState(초기값)`
    - 변수A를 변경하고자 할 땐 `변수A를 조작하는 인자`를 사용하여 변경할 수 있다.
    ```javascript
    const [counter, setCounter] = React.useState(1);
    
    function handleFormSubmit(event) {
        setCounter(counter + 1);
    }
    ```
<br />
<br />

### 2.7. 상태 끌어올리기 (lifting state up)
- 참고 자료 : `answers/15-lifting-state-up.html`
- Form에서 이벤트가 발생하게 되면 app 내에 title을 변경해야 한다.<br />이 경우, 부모 컴포넌트에 useState를 적용하여 자식 컴포넌트인 Form과 title에 적용한다.
    - Form의 `handleFormSubmit` 이벤트를 부모 컴포넌트인 App에 올려준다.
    - App 컴포넌트에서 `function handleFormSubmit(event) {}` 함수를 `<Form handleFormSubmit={handleFormSubmit} />`로 실행(props 전달).
    - `<form onSubmit={handleFormSubmit}>`에서 `{handleFormSubmit}`을 props로 받아서 실행.
    ```javascript
    const Form = ({ handleFormSubmit }) => {
        return (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="영어 대사를 입력해주세요"
            />
            <button type="submit">생성</button>
          </form>
        );
    };

    const App = () => {
        const [counter, setCounter] = React.useState(1);

        console.log("카운터", counter);

        function handleFormSubmit(event) {
          event.preventDefault();
          console.log("폼 전송됨");
          setCounter(counter + 1);
        }

        return (
          <div>
            <Title>{counter}번째 고양이 가라사대</Title>

            /**
             * props로 보낼 데이터 이름 = prop로 보낼 데이터(자료)
             *                         ㄴ 함수 handleFormSubmit
             */
            <Form handleFormSubmit={handleFormSubmit} />
            <MainCard img="https://cataas.com/cat/60b73094e04e18001194a309/says/react" />
            <Favorites />
          </div>
        );
    };
    ```
    <br />
    <br />

### 2.8. 리스트
- 참고 자료 : `answers/17-list.html`
- `map()` 메서드를 이용하여 리스트를 작성한다.
    - `{ 배열.map( (el) => (반복할 컴포넌트) )}`
    - 리스트의 자식 요소에는 `key` 값을 적용해야 한다.<br />(보통 실무에서는 아이디값을 적용한다.)
    ```javascript
    function Favorites() {
        const CAT1 =
          "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
        const CAT2 =
          "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn";
        const CAT3 =
          "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript";

        const cats = [CAT1, CAT2];

        return (
          <ul className="favorites">
            {cats.map((cat) => (
              <CatItem img={cat} key={cat} />
            ))}
          </ul>
        );
    }
    ```
    <br />
    <br />

### 2.9. 배웠던 개념 조합해서 기능 추가 (상태, prop, 이벤트, 리스트)
- 참고 자료 : `answers/18-state-prop-event-list.html`
- 하트 버튼을 클릭했을 때 고양이 리스트에 고양이가 추가되는 기능 개발
    - MainCard 이벤트를 App 컴포넌트에서 props로 전달받아 실행한다. (= useState 끌어올리기)

<br />
<br />

### 2.10. 폼 다루기
- 참고 자료 : `answers/19-form.html`
- input에서 소문자를 입력했을 때, 대문자로 보여지는 기능 적용. (=> `useState` 이용)
  - 입력받은 값을 받을 변수를 만든다. 초기값은 빈 배열로 적용한다.<br />`const [value, setValue] = React.useState("");`
  - input에 `onChange` 이벤트를 적용하여 value값이 바뀔 때마다 실행되게 적용한다.<br />`e.target.value` => input에 입력한 value값
  - 자바스크립트의 기본 API, `toUpperCase()` => 대문자로 변경해준다.
  - input에 입력받은 값을 input에 `value`로 적용하여 화면에 출력되게 보여준다.<br />`<input type="text" value={value} onChange={handleInputChange} />`
  ```javascript
  const Form = ({ handleFormSubmit }) => {
    const [value, setValue] = React.useState("");

    function handleInputChange(e) {
      setValue(e.target.value.toUpperCase());
    }

    return (
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="영어 대사를 입력해주세요"
          value={value}
          onChange={handleInputChange}
        />
        <button type="submit">생성</button>
      </form>
    );
  };
  ```
<br />
<br />

### 2.11. 폼 검증(form validation)하기
- 참고 자료 : `answers/20-form-validation.html`
- 한글을 입력하거나 빈 값 입력 후 생성 버튼을 눌렀을 때, 에러메시지 보이게 적용.
<br />

- **상황1. 에러메시지 : 한글을 입력할 수 없습니다.**
  - `userValue`에 `includesHangul`(한글)이 포함되어 있는 지를 if문으로 체크
  ```javascript
  // 한글 정규식 표현
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

  function handleInputChange(e) {
    const userValue = e.target.value;

    // 값을 지웠을 때를 대비해 초기화 과정
    setErrorMessage("");

    if (includesHangul(userValue)) {
      setErrorMessage("한글은 입력할 수 없습니다.");
    }
    setValue(userValue.toUpperCase());
  }
  ```
  <br />

- **상황2. 에러메시지: 빈 값으로 만들 수 없습니다.**
  ```javascript
  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    if (value === "") {
      setErrorMessage("빈 값으로 만들 수 없습니다.");
    }
  }
  ```
  <br />

- 혼자 테스트 : 에러메시지가 없을 때 p태그 안 보이게 처리
  ```javascript
  {
    errorMessage === '' 
    ? null
    : <p style={{ color: "red" }}>{errorMessage}</p>
  }
  ```

  - 선생님 답안 : errorMessage 기본값을 ''이 아닌 null로 바꿔서 적용해도 된다.
  ```javascript
  {
    errorMessage !== null && <p style={{ color: "red" }}>{errorMessage}</p>
  }
  ```
  <br />
  <br />

### 2.12. 코드 정리하기
- 참고자료 : `answers/21-code-cleanup.html`
- **리액트 컨벤션(convention) : 규칙, 약속**
  - 이벤트 함수는 이름을 작명할 때, 맨 앞에 `handle`를 붙인다.<br />`function handleHeartClick() {}`
  - props으로 넘길 때는 이름 맨 앞에 `on`을 붙인다.<br />`onHeartClick = {handleHeartClick}`<br />함수 이름에 `handle`를 붙였지만, props(프롭스)로 넘길때는 `on`을 붙여 넘겨준다.
    ```javascript
    const MainCard = ({ img, onHeartClick }) => {
      return (
        <div className="main-card">
          <img src={img} alt="고양이" width="400" />
          <button onClick={onHeartClick}>🤍</button>
        </div>
      );
    };

    const App = () => {
      function handleHeartClick() {
        setFavorites([...favorites, CAT3]);
      }

      return (
        <div>
          <MainCard img={mainCat} onHeartClick={handleHeartClick} />
        </div>
      );
    };
    ```
<br />
<br />

### 2.13. 로컬스토리지에 데이터 싱크하기
- 참고 자료 : `/answers/22-localstorage-1.html`
- [로컬스토리지 MDN 문서](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)
<br />

- 브라우저 로컬스토리지에 저장하여 새로고침해도 초기화되지 않고 이력 남기기.
  - 저장할 때, `localStorage.setItem(key,value)` => `localStorage.setItem('name','은혜')`
  - 가져올 때, `localStorage.getItem(key)` => `localStorage.getItem('name')`
  - 로컬스토리지에 저장한 내역은 브라우저(크롬 기준) -> 애플리케이션 -> 저장용량 -> 로컬스토리지에서 확인할 수 있다.
  - 카운터의 번호를 로컬스토리지에 저장한다.
    ```javascript
    function updateMainCat() {
      setMainCat(CAT2);

      /**
       * 카운더에 더한 값을 변수로 빼서 적용한다. 
      */
      const nextCounter = counter + 1;
      setCounter(nextCounter);
      localStorage.setItem("counter", nextCounter);
    }
    ```
  - 로컬스토리지에 저장한 값을 초기값으로 적용하기.
    ```javascript
    /**
     * 로컬스토리지에서는 저장할 때 string(문자열)으로 저장되기 때문에
     * 연산을 해야할 경우, Number()로 타입을 변환시켜주어야 한다.
     */
    const [counter, setCounter] = React.useState(
      Number(localStorage.getItem("counter"))
    );
    ```
<br />
<br />

### 2.14. 로컬스토리지에 데이터 싱크하기 2
- 참고 자료 : `answers/23-localstorage-2.html`
- JavaScript Demo : `JSON.parse()` : JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
  ```javascript
  const json = '{"result":true, "count":42}';
  const obj = JSON.parse(json);

  console.log(obj.count);
  // expected output: 42

  console.log(obj.result);
  // expected output: true
  ```
- JavaScript Demo: `JSON.stringify()` : JavaScript 값이나 객체를 JSON 문자열로 변환
  ```javascript
  console.log(JSON.stringify({ x: 5, y: 6 }));
  // expected output: "{"x":5,"y":6}"

  console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
  // expected output: "[3,"false",false]"

  console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
  // expected output: "{"x":[10,null,null,null]}"

  console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
  // expected output: ""2006-01-02T15:04:05.000Z""

  ```
  <br />

- **하트를 눌렀을 때, 메인에 있는 고양이가 Favorites에 저장되는 내역도 로컬스토리지에 저장.**
  ```javascript
  const jsonLocalStorage = {
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
      return JSON.parse(localStorage.getItem(key));
    },
  };

  /**
   * ## 변수로 jsonLocalStorage 생성
   * => JSON.parse()를 사용하여  string의 key타입로 변환. 
   */
  const [counter, setCounter] = React.useState(
    jsonLocalStorage.getItem("counter")
  );

  /**
   * ## favorites를 변수(nextFavorites)에 담아 로컬스토리지에 저장한다.
   *
   * ## favorites의 초기값은 로컬스토리에 내역이 없을 땐, [] (빈 배열)로 적용한다.
   *  ㄴ jsonLocalStorage.getItem("favorites") || []
   *  ㄴ 앞에 값(jsonLocalStorage.getItem)이 없으면 뒤에 값([])으로 적용.
   */
  const [favorites, setFavorites] = React.useState(
    jsonLocalStorage.getItem("favorites") || []
  );

  function handleHeartClick() {
    const nextFavorites = [...favorites, mainCat];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }
  ```
  <br />
  <br />

### 2.15. Git
- Git 명령어
  - 이름 설정 : git config –global user.name 이름
  - 이메일 설정: git config –global user.email 이메일
<br />
<br />

### 2.16. 지금까지 배운 개념 정리 1 (JSX, 바벨, 컴포넌트, 스타일링, 이벤트)
#### 2.16.1. **JSX(Javascript + XML)**
- 자바스크립트에 HTML 태그를 끼얹은 문법
- HTML 태그 안에선 중괄호(`{}`)를 사용해서 JS를 쓸 수 있다.
- `title` 변수에 담은 `<h1>`태그는 `리액트 엘리먼트`라고 부른다.
```javascript
const count = 1;
const title = <h1>{ count }번째 고양이</h1>
```
<br />
<br />

#### 2.16.2. 바벨 Babel
- 최신 문법을 브라우저가 이해할 수 있는 자바스크립트로 통역
- 브라우저는 JSX를 이해하지 못 한다.
- Babel이라는 통역사로 JSX -> Javascript
<br />
<br />

#### 2.16.3. 리액트 코드 브라우저에 그리기
- 빈 HTML 공간에 React(리액트) 때려박기<br />=> `myButton`을 `app`엘리먼트에 그려넣기.
```HTML
<div id="app"></div>
```
```Javascript
const target = document.querySelector("#app")
const myButton = <button>버튼</button>

ReactDOM.render(myButton, target);
```
<br />
<br />

#### 2.16.4. 컴포넌트
- 여기저기 재사용 가능한 UI 코드 조각
- `props` => `properties`(속성들)의 약자.
```
<Card emoji={dog} title='멍멍' />
<Card emoji={cat} title='야옹' />

function Card(props) {
  return (
    <div>
      {props.emoji}
      <h2>{props.title}</h2>
    </div>
  )
}
```
<br />
<br />

#### 2.16.5. 스타일링
- 리액트에 CSS 끼얹기
- CSS 클래스 : `className`
- 인라인 스타일링 : `style={ {스타일속성: 스타일값} }`
```
<div className="danger">위험</div>
<div style={{color: 'red'}}>위험</div>
```
<br />
<br />

#### 2.16.6. 이벤트
- 사용자 이벤트(클릭, 스크롤 등) 다루기
- 일반 자바스크립트 이벤트 목록과 동일하지만 중간을 대문자로 쓰면 된다.
- `onclick` => `onClick`
- `onsubmit` => `onSubmit`
```
function handleClick(event) {
  console.log("클릭했습니다")
}

<button onClick={handleClick}>제출</button>
```
<br />
<br />

### 2.17. 지금까지 배운 개념 정리 2 (상태, 리스트, 폼, 로컬스토리지)
#### 2.17.1. 상태
- 컴포넌트 안에서 자유롭게 변경할 값이 필요할 때
- `useState`함수로 상태를 추가할 수 있다.
- `const [상태명, 상태변경함수명] = React.useState(초기값)`
- 컴포넌트 안에서 만들 수 있다.
```
const [counter, setCounter] = React.useState(1)
function 카운터증가() {
  setCounter(counter + 1)
}

return <button onClick={카운터증가}>카운터는 {counter}</button>
```
<br />
<br />

#### 2.17.2. 리스트
- 배열로 반복되는 UI 그리기
- 웹사이트를 만들 때 정말 많이 쓴다.
- 배열에서 map을 돌면서 리액트 UI를 반환한다.
```
const favorites = ["이미지1","이미지2","이미지3"]
<ul>
  {favorites.map(image => <img src={image} />)}
</ul>
```
<br />
<br />

#### 2.17.3. 폼
- 사용자 입력 다루기
- 사용자 입력값을 직접 다루기 위해 value를 상태로 관리한다.
```
const [value, setValue] = React.useState("초기값이에요")
function onValueChange(e) {
  setValue(e.target.value);
}

<form onSubmit = {handleSubmit}>
  <input value={value} onChange={onValueChange} />
  <button type="submit">제출</button>
</form>
```
<br />
<br />

#### 2.17.4. 로컬스토리지
- 브라우저에 데이터 저장하기 (리액트문법 X, 브라우저 기능 O)
- 간단한 데이터 저장이 필요할 땐 `localStorage`를 쓰세요.
- 7일까지 저장 가능 - webkit관련 브라우저
```
localStorage.setItem('이름','유림')
localStorage.getItem('이름') // 유림
```
<br />
<br />
<br />

## 3. 리액트 앱에 숨 불어넣기
### 3.1. 실제 고양이 데이터 받아오기- fetch, Open API
- **수업 자료**
  - [Public API 리포지토리 주소](https://github.com/public-apis/public-apis)
  - [Using Fetch MDN](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)
  - [자바스크립트 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
  - [자바스크립트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
  <br />

- `Open API` 활용 : https://cataas.com/
  - `Basic` > Url `/cat/says/:text` => `https://cataas.com/cat/says/hello`
  - `/cat/says/:text` 을 참고하여 작업할 예정.<br />(입력한 대사에 맞는 고양이 짤방을 만들 예정)
  <br />

- `고양이 API`는 서버로 요청하는 API를 의미하고,<br />`fetch API`는 자바스크립트로 호출하는 API를 의미.
  - Open API : https://cataas.com 사용
  - 이미지 파일 그대로 얻어오는 것이 아닌 이미지의 URL을 가져와야 한다.<Br />때문에 해당 사이트에서 `json`파일을 가져온다.<br />`Advanced > /cat?json=true` 영역 참고. ([예시 보기](https://cataas.com/cat?json=true))
  ```javascript
  fetch('https://cataas.com/cat?json=true')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
  ```
  <br />
  <br />

### 3.2. 고양이 데이터 내 앱에 연동하기
- **수업 자료** 
  - [async await 문법 글](https://joshua1988.github.io/web-development/javascript/js-async-await/)
  - [async await 무료 강의](https://www.inflearn.com/course/vue-js/lecture/17061?volume=1.00)
  - `/answers/28-api.html`
<br />

```javascript
const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(
    `${OPEN_API_DOMAIN}/cat/says/${text}?json=true`
  );
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

// 생성버튼을 클릭했을 때 fetchCat 부르기
async function updateMainCat(value) {
  const newCat = await fetchCat(value);

  setMainCat(newCat);
}
```
- `fetchCat`이라는 변수를 만들고 입력한 텍스트를 인자 `text`로 받는다.
- `/cat/says/${text}?json=true` => 입력한 텍스트의 `json`값을 받아와라.
- `fetch`에서 `then`으로 응답값을 풀어줘도 되지만,<br />이번엔 `async` & `await`을 사용하여 응답값을 받아온다.
- `const responseJson = await response.json()`<br />=> 가져온 `response`에서 `json` 값을 가져온다.
- `${OPEN_API_DOMAIN}/${responseJson.url}`<Br />=> 가져온 `response`에서 `url`을 가져와서 `OPEN_API_DOMAIN`에 연결해주면 끝!
- `fetchCat` 문법에 `async` & `await`으로 사용했기 때문에<br />해당 데이터를 제대로 받아오기 위해선 `async` & `await`을 써줘야 한다.
<br />

#### async & await 예시
[자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)
```javascript
// 기본 문법
async function 함수명() {
  await 비동기_처리_메서드_명();
}

/** 
 * ## 예시 로직
 * 1. fetchUser()를 이용하여 사용자 정보 호출
 * 2. 받아온 사용자 아이디가 1이면 할 일 정보 호출
 * 3. 받아온 할 일 정보의 제목을 콘솔에 출력
 * 
 * ## async & await 예외처리
 * => try catch
 * */ 
function fetchUser() {
  var url = 'https://jsonplaceholder.typicode.com/users/1'
  return fetch(url).then(function(response) {
    return response.json();
  });
}

function fetchTodo() {
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  return fetch(url).then(function(response) {
    return response.json();
  });
}

async function logTodoTitle() {
  try {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    console.log(error);
  }
}
```
<br />
<br />

### 3.3. 컴포넌트 생성시 고양이 데이터 받아오기- useEffect
- 수업 자료 : `answers/29-useEffect.html`
<br />

#### 접속 시, 고양이 이미지를 서버에서 불러오려고 한다.
- 처음 진입 했을 때, API를 호출하여 고양이 이미지를 서버에서 불러온다.
  ```javascript
  async function setInitialCat() {
    const newCat = await fetchCat("First cat");
    console.log(newCat);
    setMainCat(newCat);
  }
  ```
- `setInitialCat()` 만 실행하게 되면 계속 해당 함수가 실행이 된다.<br />해당 함수는 첫 진입 시, 딱 1번만 실행하면 된다.
- 이럴 때, `useEffect`을 사용하면 된다.
  ```javascript
  async function setInitialCat() {
    const newCat = await fetchCat("First cat");
    console.log(newCat);
    setMainCat(newCat);
  }

  // useEffect를 사용하여 딱 1번 실행하게 적용.
  React.useEffect(() => {
    setInitialCat();
  }, []);
  ```
  <br />
  <br />

### 3.4. useEffect의 정체
- `useEffect()` => 업데이트가 될 때마다 실행.<br />단, 두번째 인자에 조건을 넣어주게 되면 해당 조건이 업데이트 될 때마다 실행하게 된다.
  - **useEffect()에 두번째 인자가 없을 경우, 해당 영역이 업데이트 될 때마다 실행**
  ```javascript
  React.useEffect(() => {
    setInitialCat();
  });
  ```
  <br />

  - **`[]` => 컴포넌트가 맨 처음에 나타날 때만 실행**
  ```javascript
  React.useEffect(() => {
    setInitialCat();
  }, []);
  ```
  <br />

  - **`[counter]` => counter 변수가 업데이트될 때마다 실행**
  ```javascript
  React.useEffect(() => {
    setInitialCat();
  }, [counter]);
  ```
  <br />

#### 정리
리액트 컴포넌트 안에 있는 코드는 기본적으로 UI가 새로 업데이트 될 때마다 불린다.<br />다만, 어떤 상태가 업데이트될 때만 불려지도록(실행) 제한하고 싶을 때는 `useEffect()`의 두번째 인자로 배열을 넘기고 거기에 원하는 상태를 넘겨주면 된다.<br />만약에 상태 변화 아무것도 상관없이 맨 처음 앱이 생성되었을 때만 호출하고 싶을 때는 `[]` 빈 배열을 두번째 인자로 적용하면 된다.
<br />
<br />

### 3.5. 조건부 렌더링
- 수업 자료 : `answers/31-conditional-rendering.html`
<br />

#### 로컬스토리지를 이용해서 하트를 누른 고양이 사진 저장하는 법.
- 고양이 사진이 없을 때, 문구 노출 => 이런 것을 **조건부 렌더링(Conditional Rendering)**이라고 부른다.
  - `if (favorites.length === 0) {}`
  ```javascript
  function Favorites({ favorites }) {
    // 고양이 사진이 없을 때
    if (favorites.length === 0) {
      return <div>사진 위 하트를 눌러 고양이 사진을 저장해봐요!</div>;
    }

    return (
      <ul className="favorites">
        {favorites.map((cat) => (
          <CatItem img={cat} key={cat} />
        ))}
      </ul>
    );
  }
  ```
  <br />

- 하트를 누르면 '빨간색' 하트로 변경 => 조건부 렌더링
  - `includes()`를 활용하여 하트를 눌렀는 지? 확인 체크
    ```javascript
    const alreadyFavorite = favorites.includes(mainCat);,

    // 예시
    [1,2,3].includes(1) // true
    [1,2,3].includes(4) // false
    ```
  - 삼항 연산자를 이용하여 '빨간색' 하트로 변경
    ```javascript
    const MainCard = ({ img, onHeartClick, alreadyFavorite }) => {
      const heartIcon = alreadyFavorite ? "💖" : "🤍";
      return (
        <div className="main-card">
          <img src={img} alt="고양이" width="400" />
          <button onClick={onHeartClick}>{heartIcon}</button>
        </div>
      );
    };
    ```
  - 카운터가 없으면 '??번째' 안 보이게 적용
    ```javascript
    const counterTitle = counter === null ? "" : counter + '번째 '

    <Title>{counterTitle}고양이 가라사대</Title>
    ```
    <br />
    <br />

### 3.6. setState 더 알아보기- 함수, 지연초기화
- 수업 자료 : `answers/33-setState-deep-dive.html`

#### `useState()`에 함수를 넘겨줌으로써 계속해서 불필요하게 접근하지 않는다.
- **리액트는 매 렌더링마다 모든 코드를 실행**한다.
- `useState(() => {})` => 함수로 넘기면 매 렌더링마다 불리지만 실제 값은 "get비싼초기계산값()"이 실행(call 된다고 이해하면 된다.)<br />즉, 첫 렌더링때만 수행하게 된다.
- 로컬스토리지에서 매번 렌더링을 할 필요가 없기 때문에 함수를 적용하게 된 것이다.
```javascript
// 예시
const [like, setLike] = useState(() => get비싼초기계산값());

const [counter, setCounter] = React.useState(() => {
  return jsonLocalStorage.getItem("counter");
});
```
<br />

#### State 업데이트는 비동기적일 수도 있습니다.
- [리액트 state 업데이트 == 비동기적, 자세히보기](https://ko.reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)
- **React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리할 수 있다.**
- `this.props`와 `this.state`가 비동기적으로 업데이트될 수 있기 때문에 다음 state를 계산할 때 해당 값에 의존해서는 안 된다.
<br />
<br />

```javascript
setState(prevState, prevProps)
```
- prevState = 이전 상태, prevProps = 이전 props.
<br />
<br />

```javascript
setCounter((prev) => {
  const nextCounter = prev + 1;
  jsonLocalStorage.setItem("counter", nextCounter);
  return nextCounter;
});
```
- 리액트가 성능을 위해서 여러 state호출을 한꺼번에 묶어서 처리하기 때문이다.<br />그래서 기존값을 counter로 참고하고 5번 연타하면 setCounter자체는 5번 불리지만 기존 counter가 아직 업데이트가 안 된 값들을 가져와서 +5가 안 된다.<br />그래서 **기존값을 명확히 가져오기 위해선 함수를 통해 받아와야 한다.**
<br />