import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Switch',
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    color: 'primary',
    label: 'Remember me',
  },
};

export const IOSStyle: Story = {
  args: {
    trackHeight: '24px',
    trackWidth: '36px',
    thumbSize: '16px',
    offsetX: '4px',
    duration: '500ms',
    label: 'Remember me',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Remember me',
  },
};
