## 스토리북 v7~

- [v7 예제 샘플코드](https://github.com/dev-yakuza/react_with_typescript_book_examples/tree/main/ch11.cdd-todo/storybook-v7)

```javascript
import type { Meta, StoryObj } from '@storybook/react';

import { 컴포넌트명 } from '컴포넌트 경로';

const meta = {
  title: '폴더명/컴포넌트명',
  component: 컴포넌트명,
  parameters: {
    // default 배경 적용
    backgrounds: {
      default: '문구',
      values: [{ name: '문구', value: '색상값' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof 컴포넌트명>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    //...
  },
};
```

<br />
<hr />
<br />

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
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AppTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

```

#### 1.1. Link 사용했을 때

- `.storybook/preview.ts`에 추가하기

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
