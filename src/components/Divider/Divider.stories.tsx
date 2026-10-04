import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    thickness: {
      control: 'select',
      options: ['thin', 'medium', 'thick'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    variant: {
      control: 'select',
      options: ['line', 'block', 'decorative'],
    },
    color: {
      control: 'select',
      options: ['gray', 'blue', 'red', 'light'],
    },
    buttonPosition: {
      control: 'select',
      options: ['center', 'right'],
    },
    text: { control: 'text' },
    buttonLabel: { control: 'text' },
    hasButtonIcon: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    labels: { control: 'object' },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thickness: 'thin',
    align: 'center',
    variant: 'line',
    color: 'gray',
    text: 'Divider',
    buttonLabel: '',
    buttonPosition: 'center',
    hasButtonIcon: false,
    iconOnly: false,
    labels: ['Label', 'Label', 'Label'],
  },
};
