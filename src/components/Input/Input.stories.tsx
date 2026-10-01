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
    width: { control: 'text' },
    height: { control: 'text' },
    errorMessage: { control: 'text' },
    captionMessage: { control: 'text' },
    label: { control: 'text' },
    hasLabel: { control: 'boolean' },
    hasLabelInfo: { control: 'boolean' },
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
    hasLabelInfo: true,
    isOptional: true,
    placeholder: 'Search',
    captionMessage: 'Caption Text Message',
    width: '320px',
    errorMessage: '',
    height: '44px',
    hasStartIcon: true,
    hasEndIcon: true,
    hasPrefix: false,
    prefix: 'https://',
    hasSuffix: false,
    suffix: 'suffix',
    disabled: false,
  },
};
