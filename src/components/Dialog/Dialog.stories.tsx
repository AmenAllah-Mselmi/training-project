import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    theme: {
      control: 'select',
      options: ['light', 'image'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    primaryActionLabel: { control: 'text' },
    secondaryActionLabel: { control: 'text' },
    backgroundImage: { control: 'text' },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title Placeholder',
    description: 'Placeholder for dialo text Enter text into this container',
    primaryActionLabel: 'Accept all',
    secondaryActionLabel: 'Dismiss',
    layout: 'vertical',
    theme: 'light',
    size: 'medium',
  },
};
