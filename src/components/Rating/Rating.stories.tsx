import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['standard', 'google', 'avatars'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'radio',
      options: ['warning', 'primary'],
    },
    value: { control: 'number' },
    defaultValue: { control: 'number' },
    max: { control: 'number' },
    precision: { control: 'number' },
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leftContent: { control: 'text' },
    rightContent: { control: 'text' },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormattedText = () => (
  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
    <span style={{ fontWeight: 600, color: '#0f172a' }}>5.0</span>
    <span style={{ color: '#64748b' }}>11 Reviews</span>
  </div>
);

// Single format default story
export const Default: Story = {
  args: {
    variant: 'standard',
    size: 'medium',
    color: 'warning',
    defaultValue: 4,
    max: 5,
    precision: 0.5,
    readOnly: false,
    disabled: false,
  },
  render: (args) => {
    // If standard variant, render the formatted text fallback if no custom string is passed via controls
    const left = (args.variant === 'standard' && !args.leftContent) ? <FormattedText /> : args.leftContent;
    const right = (!args.rightContent) ? 
      (args.variant !== 'standard' ? "100K Happy clients" : <FormattedText />) : 
      args.rightContent;
      
    return <Rating {...args} leftContent={left} rightContent={right} />;
  }
};
