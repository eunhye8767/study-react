import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * redux에선 리덕스툴팁 방식을 권장하기 때문에
 * 현재 createStore는 밑줄이 그어져있다.
 */
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = createStore(rootReducer);

// <!-- 테스트로 적용이 잘 되었는 지 확인
// store.dispatch({
//   type: "ADD_TODO",
//   text: "Use Redux",
// });
// console.log("store getState,", store.getState());
// -->

const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: "INCREMENT" })}
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </React.StrictMode>
  );

render();
store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
