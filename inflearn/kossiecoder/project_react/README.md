# 프로젝트로 배우는 React.js

#### 1. useState(prevState)
```javascript
import { useState } from 'react';

const [number, setNumber] = useState(1);

const handleChange = () => {
  setNumber(prevState => prevState * 2);
  console.log(number)
}
```

- `prevState` <br >
=> 작명 가능하나 통상적으로 prevState 칭함.<br />
=> 이전 state 값을 가져와서 변경할 수 있음.
- `console.log(number)` <br />
=> 바뀐 useState 값이 나오는 것이 아닌 이전 `number` 값이 나온다.<br />
=> 리-렌더링 후 바뀌기 때문에 바뀌기 전 `number` 값이 나오는 것이다.