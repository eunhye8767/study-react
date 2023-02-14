import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";
import posts from "./posts";

const rootReducer = combineReducers({
  todos,
  counter,
  posts
})

export default rootReducer;

// 리덕스 공홈에 명시된 방법.
export type RootState = ReturnType<typeof rootReducer>;