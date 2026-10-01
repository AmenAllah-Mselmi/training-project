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
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof CardInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Card Number',
    hasLabel: true,
    hasLabelInfo: true,
    isOptional: true,
    placeholder: '0000 0000 0000 0000',
    captionMessage: 'Caption Text Message',
    width: '320px',
    errorMessage: '',
    height: '44px',
    hasStartIcon: true,
    hasEndIcon: true,
    disabled: false,
  },
};
