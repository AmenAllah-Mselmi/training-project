import type { Meta, StoryObj } from '@storybook/react';
import { Cursor } from './Cursor';

const meta: Meta<typeof Cursor> = {
  title: 'Components/Cursor',
  component: Cursor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'pointer',
        'grab',
        'grabbing',
        'zoom-in',
        'zoom-out',
        'move',
        'help',
        'text',
        'figma',
        'crosshair',
        'camera',
        'resize-nwse',
        'resize-nesw',
        'resize-ns',
        'resize-ew',
        'resize-row',
        'resize-col'
      ],
      description: 'The cursor variant to display',
    },
    color: {
      control: 'color',
      description: 'Background color for Figma-style cursors',
    },
    label: {
      control: 'text',
      description: 'Label text for Figma-style cursors',
    },
    size: {
      control: { type: 'number', min: 0.5, max: 3, step: 0.1 },
      description: 'Scale size of the cursor',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cursor>;

export const Default: Story = {
  args: {
    variant: 'default',
    color: '#0ea5e9',
    label: '',
    size: 1,
  },
};
