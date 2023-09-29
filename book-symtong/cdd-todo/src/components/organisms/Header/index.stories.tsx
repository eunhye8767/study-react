import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    // default 색상 적용
    backgrounds: {
      default: 'Header background color',
      values: [{ name: 'Header background color', value: '#304ffe' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
