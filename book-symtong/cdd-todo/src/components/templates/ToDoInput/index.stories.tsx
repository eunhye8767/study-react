import type { Meta, StoryObj } from '@storybook/react';

import { ToDoInput } from '.';

const meta = {
  title: 'Templates/ToDoInput',
  component: ToDoInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ToDoInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toDoList: ['리액트 공부하기', 'CDD 공부하기', '힐 일 목록 앱 개발하기'],
  },
};
