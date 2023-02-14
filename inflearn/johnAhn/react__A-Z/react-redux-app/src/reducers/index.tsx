import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";

const rootReducer = combineReducers({
  todos,
  counter
})

export default rootReducer;

// 리덕스 공홈에 명시된 방법.
export type RootState = ReturnType<typeof rootReducer>;