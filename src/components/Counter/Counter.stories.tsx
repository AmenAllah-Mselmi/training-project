import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from './Counter';

const meta = {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['stepper', 'stacked', 'inline'],
    },
    border: { control: 'text' },
    borderRadius: { control: 'text' },
    errorMessage: { control: 'text' },
    captionMessage: { control: 'text' },
    label: { control: 'text' },
    hasLabel: { control: 'boolean' },
    isOptional: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Change Label',
    hasLabel: true,
    isOptional: false,
    captionMessage: 'Caption Text Message',
    size: 'medium',
    variant: 'stepper',
    disabled: false,
    defaultValue: 100,
  },
};

