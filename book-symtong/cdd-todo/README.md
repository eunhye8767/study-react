## 스토리북 v7~

### 1. default 색상 적용

```javascript
import type { Meta, StoryObj } from '@storybook/react';

import { AppTitle } from '.';

const meta = {
  title: 'Atoms/AppTitle',
  component: AppTitle,
  parameters: {
    // default 색상 적용
    backgrounds: {
      default: 'Header background color',
      values: [{ name: 'Header background color', value: '#304ffe' }],
    },
    tags: ['autodocs'],
  },
  argTypes: {},
} satisfies Meta<typeof AppTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

```

#### 1.1. Link 사용했을 때

- 원래는 `App.tsx`에 적용하지만 현재 상황 기준으로 처리해야할 때<br />해당 페이지에서 `BrowserRouter`을 적용해준다.

```javascript
import { BrowserRouter, Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export const AppTitle = () => {
  return (
    <BrowserRouter>
      <Container to="/">할 일 목록 앱</Container>
    </BrowserRouter>
  );
};
```

<br />
<br />
<br />
