import type { Meta, StoryObj } from '@storybook/react';
import { PhoneInput } from './PhoneInput';

const meta = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
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
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Phone Number',
    hasLabel: true,
    hasLabelInfo: true,
    isOptional: true,
    placeholder: '(000) 000-0000',
    captionMessage: 'Caption Text Message',
    width: '320px',
    errorMessage: '',
    height: '44px',
    disabled: false,
  },
};
