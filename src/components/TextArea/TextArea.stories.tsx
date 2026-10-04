import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
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
    hasToolbar: { control: 'boolean' },
    maxLength: { control: 'number' },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    hasLabel: true,
    infoContent: 'Information tooltip',
    isOptional: true,
    placeholder: 'Enter a description...',
    captionMessage: 'Caption Text Message',
    size: 'medium',
    disabled: false,
    hasToolbar: false,
    maxLength: 100,
  },
};
