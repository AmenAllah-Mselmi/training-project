import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ListItem } from './ListItem';

// Mock icons to perfectly match the provided image examples
const CheckCircleIcon = () => (
  <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a' }}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

const PlusCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    interactive: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
    // We hide the complex ReactNode props from the controls panel
    // since users cannot easily edit them via text inputs.
    leftContent: { control: false },
    rightContent: { control: false },
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// As requested, there is only one "Default" story format.
// We provide the Check & Plus icons here purely as an example to show
// how you can pass *any* component into the left/right slots.
export const Default: Story = {
  args: {
    title: 'Label Text',
    description: 'Description',
    size: 'medium',
    interactive: true,
    disabled: false,
    leftContent: <CheckCircleIcon />,
    rightContent: <PlusCircleIcon />,
  },
};
