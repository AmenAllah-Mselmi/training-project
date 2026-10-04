import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline'],
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'neutral', 'purple', 'pink'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    borderRadius: {
      control: 'select',
      options: ['small', 'medium', 'full'],
    },
    label: { control: 'text' },
    hasLeftIcon: { control: 'boolean' },
    hasRightIcon: { control: 'boolean' },
    hasDot: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    variant: 'solid',
    color: 'primary',
    size: 'medium',
    borderRadius: 'full',
    hasLeftIcon: true,
    hasRightIcon: true,
    hasDot: false,
    iconOnly: false,
  },
};
