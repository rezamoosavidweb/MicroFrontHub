import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    color: 'primary',
    label: 'Remember me',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Remember me',
  },
};
