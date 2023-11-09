import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ExportIcon, EditIcon } from '../icons';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    startIcon: {
      table: {
        disable: true,
      },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Submit',
  },
};
export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Submit',
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Submit',
  },
};
export const Loading: Story = {
  args: {
    loading: true,
  },
};
export const WithStartIcon: Story = {
  args: {
    startIcon: <EditIcon />,
    children: 'Edit',
  },
};
export const WithEndIcon: Story = {
  args: {
    endIcon: <ExportIcon />,
    children: 'Export',
  },
};
