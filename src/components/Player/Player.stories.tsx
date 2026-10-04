import type { Meta, StoryObj } from '@storybook/react';
import { Player } from './Player';

const meta: Meta<typeof Player> = {
  title: 'Components/Player',
  component: Player,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Overall size of the video player',
    },
    isLive: {
      control: 'boolean',
      description: 'Toggle the LIVE badge',
    },
    showClose: {
      control: 'boolean',
      description: 'Show the close (X) button',
    },
    isPlaying: {
      control: 'boolean',
      description: 'Toggle playing state (changes icons)',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Video progress percentage',
    },
    currentTime: {
      control: 'text',
      description: 'Current playback time text',
    },
    totalTime: {
      control: 'text',
      description: 'Total video duration text',
    },
    showCenterButton: {
      control: 'boolean',
      description: 'Show large center play/pause button',
    },
    centerButtonVariant: {
      control: 'radio',
      options: ['solid', 'translucent'],
      description: 'Style variant for the center button',
    },
    centerButtonSize: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the center button overlay',
    },
    showControls: {
      control: 'boolean',
      description: 'Show bottom control bar',
    },
    posterSrc: {
      control: 'text',
      description: 'URL for the video background image',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Player>;

export const Default: Story = {
  args: {
    size: 'lg',
    isLive: true,
    showClose: true,
    isPlaying: false,
    progress: 30,
    currentTime: '12:44',
    totalTime: '1:12:14',
    showCenterButton: true,
    centerButtonVariant: 'solid',
    centerButtonSize: 'md',
    showControls: true,
    posterSrc: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1441&auto=format&fit=crop'
  },
};
