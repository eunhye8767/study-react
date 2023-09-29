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

#### 1.1. Link 사용할 때

1. `.storybook/preview.ts` 파일을 `.tsx` 파일로 변경
2. 기존 파일을 보면 JSX 문법을 사용하고 있습니다. <br />하지만 `.ts` 파일은 `TypeScript`라는 의미이기에 이 파일에서는 JSX 문법을 이해할 수 없습니다.<br />그래서 **`.tsx(TypeScript JSX)`로 변경하여 TypeScript 기반의 JSX 파일이라는 것**을 알려 줘야 합니다.

```javascript
// .storybook/preview.tsx
import type { Preview } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];
```

<br />
<br />
<br />
