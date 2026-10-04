import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

// Generate some mock histogram data that looks somewhat like a wave
const mockGraphData = Array.from({ length: 40 }, (_, i) => {
  const base = Math.sin(i / 4) * 30 + 50;
  const noise = Math.random() * 20 - 10;
  return Math.min(100, Math.max(10, base + noise));
});

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    isRange: { control: 'boolean' },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'success', 'warning', 'neutral'],
    },
    thumbShape: {
      control: 'radio',
      options: ['circle', 'square'],
    },
    trackVariant: {
      control: 'radio',
      options: ['solid', 'graph'],
    },
    label: { control: 'text' },
    caption: { control: 'text' },
    rightLabel: { control: 'text' },
    showInfo: { control: 'boolean' },
    disabled: { control: 'boolean' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    valueLabelDisplay: {
      control: 'select',
      options: ['on', 'auto', 'off'],
    },
    defaultValue: { control: 'object' },
    marks: { control: 'object' },
    graphData: { control: 'object' },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    isRange: false,
    color: 'primary',
    thumbShape: 'circle',
    trackVariant: 'solid',
    label: 'Label',
    caption: 'Caption Text Message',
    rightLabel: '100',
    showInfo: true,
    disabled: false,
    min: 0,
    max: 100,
    step: 10,
    marks: true,
    defaultValue: undefined, // Let the component handle it based on isRange
    valueLabelDisplay: 'off',
    graphData: mockGraphData,
  },
};
