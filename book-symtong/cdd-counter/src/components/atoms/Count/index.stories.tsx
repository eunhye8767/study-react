import type { Meta, StoryObj } from '@storybook/react';

import { Count } from '.';

const meta = {
  title: 'Atoms/Count',
  component: Count,
} satisfies Meta<typeof Count>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
  },
};
