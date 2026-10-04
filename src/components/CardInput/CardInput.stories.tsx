import type { Meta, StoryObj } from '@storybook/react';
import { CardInput } from './CardInput';

const meta = {
  title: 'Components/CardInput',
  component: CardInput,
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
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof CardInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Card Number',
    hasLabel: true,
    infoContent: 'Information tooltip',
    isOptional: true,
    placeholder: '0000 0000 0000 0000',
    captionMessage: 'Caption Text Message',
    size: 'medium',
    hasStartIcon: true,
    hasEndIcon: true,
    disabled: false,
  },
};
