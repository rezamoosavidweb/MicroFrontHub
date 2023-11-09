import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'Radio',
  argTypes: {
    color: {
      defaultValue: 'primary',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { label: 'select' },
};

export const Disabled: Story = {
  args: { label: 'select', disabled: true },
};
