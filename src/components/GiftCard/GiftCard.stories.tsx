import type { Meta, StoryObj } from '@storybook/react';
import { GiftCard } from './GiftCard';

const meta: Meta<typeof GiftCard> = {
  title: 'Components/GiftCard',
  component: GiftCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    brand: {
      control: 'select',
      options: ['amazon', 'steam', 'xbox', 'apple', 'spotify', 'googleplay', 'netflix', 'paypal', 'generic'],
      description: 'The brand logo to display on the card',
    },
    amount: {
      control: 'number',
      description: 'The monetary value of the gift card',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Overall size of the card',
    },
    variant: {
      control: 'radio',
      options: ['light', 'dark', 'brand'],
      description: 'Visual variant/theme of the card background',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GiftCard>;

export const Default: Story = {
  args: {
    brand: 'amazon',
    amount: 100,
    size: 'md',
    variant: 'brand',
  },
};
