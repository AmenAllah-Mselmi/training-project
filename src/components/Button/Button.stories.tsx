import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline', 'ghost'],
    },
    color: {
      control: 'select',
      options: ['primary', 'neutral', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'full'],
    },
    brand: {
      control: 'select',
      options: ['none', 'google', 'facebook', 'twitter', 'apple'],
    },
    label: { control: 'text' },
    hasLeftIcon: { control: 'boolean' },
    hasRightIcon: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'solid',
    color: 'primary',
    size: 'medium',
    borderRadius: 'medium',
    hasLeftIcon: true,
    hasRightIcon: true,
    isLoading: false,
    iconOnly: false,
    brand: 'none',
    disabled: false,
  },
};
