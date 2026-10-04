import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    src: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    isVerified: { control: 'boolean' },
    showAddAction: { control: 'boolean' },
    group: { control: 'object' },
    maxGroup: { control: 'number' },
    remainingCount: { control: 'number' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'lg',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    title: 'Name',
    subtitle: 'Caption',
    isVerified: true,
    showAddAction: true,
  },
};
