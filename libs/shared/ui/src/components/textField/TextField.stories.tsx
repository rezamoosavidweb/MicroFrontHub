import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { SearchIcon } from '../icons';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'TextField',
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    label: 'Outline',
  },
};
export const Disabled: Story = {
  args: {
    label: 'Outline',
  },
};
export const WithAdornment: Story = {
  args: {
    label: 'Outline',
    inputAdornment: { Body: <SearchIcon /> },
  },
};
