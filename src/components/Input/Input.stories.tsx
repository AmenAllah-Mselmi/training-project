import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    border: { control: 'text' },
    borderRadius: { control: 'text' },
    errorMessage: { control: 'text' },
    captionMessage: { control: 'text' },
    label: { control: 'text' },
    hasLabel: { control: 'boolean' },
    infoContent: { control: 'text' },
    isOptional: { control: 'boolean' },
    hasStartIcon: { control: 'boolean' },
    hasEndIcon: { control: 'boolean' },
    hasPrefix: { control: 'boolean' },
    prefix: { control: 'text' },
    hasSuffix: { control: 'boolean' },
    suffix: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Search Options',
    hasLabel: true,
    infoContent: 'Information tooltip',
    isOptional: true,
    placeholder: 'Search',
    captionMessage: 'Caption Text Message',
    size: 'medium',
    hasStartIcon: true,
    hasEndIcon: true,
    hasPrefix: false,
    prefix: 'https://',
    hasSuffix: false,
    suffix: 'suffix',
    disabled: false,
  },
};
