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
