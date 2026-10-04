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
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Phone Number',
    hasLabel: true,
    infoContent: 'Information tooltip',
    isOptional: true,
    placeholder: '(000) 000-0000',
    captionMessage: 'Caption Text Message',
    size: 'medium',
    disabled: false,
  },
};
