import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const UserAvatar = () => (
  <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16, color: '#94a3b8' }}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </div>
);

const FlagIcon = () => (
  <span style={{ fontSize: '16px' }}>🇺🇸</span>
);

const MOCK_OPTIONS = [
  { value: '1', label: 'Product Design' },
  { value: '2', label: 'UX Design' },
  { value: '3', label: 'UI Design' },
];

const USER_OPTIONS = [
  { value: 'nisha', label: 'Nisha Kumari @nisha', icon: <UserAvatar /> },
  { value: 'sophia', label: 'Sophia @sofia', icon: <UserAvatar /> },
  { value: 'tisha', label: 'Tisha Norton @tisha', icon: <UserAvatar /> },
];

const COUNTRY_OPTIONS = [
  { value: 'us', label: 'United States 01', icon: <FlagIcon /> },
  { value: 'af', label: 'Afghanistan 93', icon: <span style={{ fontSize: '16px' }}>🇦🇫</span> },
  { value: 'al', label: 'Albania 355', icon: <span style={{ fontSize: '16px' }}>🇦🇱</span> },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label for the select component' },
    hasLabel: { control: 'boolean', description: 'Toggle label visibility' },
    infoContent: { control: 'text', description: 'Tooltip content for the info icon' },
    isOptional: { control: 'boolean', description: 'Shows (Optional) text' },
    captionMessage: { control: 'text', description: 'Helper text below input' },
    errorMessage: { control: 'text', description: 'Error message (sets error state)' },
    disabled: { control: 'boolean', description: 'Disables the select' },
    isOpen: { control: 'boolean', description: 'Force open the dropdown menu for testing' },
    isMulti: { control: 'boolean', description: 'Enable multi-selection checkboxes' },
    showSearch: { control: 'boolean', description: 'Show search input inside dropdown' },
    isTagInput: { control: 'boolean', description: 'Render as Tag Input' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Label',
    hasLabel: true,
    isOptional: true,
    infoContent: 'More info about this field',
    captionMessage: 'Caption Text Message',
    placeholder: 'Select Options',
    startIcon: <PlusIcon />,
    isMulti: false,
    showSearch: false,
    isOpen: false,
    isTagInput: false,
    options: MOCK_OPTIONS,
    value: [],
    tags: ['Product Design', 'UX Design'],
  },
  render: (args) => {
    // We add some helper controls for testing different presets in the same story
    if (args.placeholder === 'Select Users') {
      args.startIcon = <UserAvatar />;
      args.options = USER_OPTIONS;
      if (args.isMulti) args.value = ['nisha'];
    } else if (args.placeholder === 'Select Country') {
      args.startIcon = <FlagIcon />;
      args.options = COUNTRY_OPTIONS;
      if (!args.isMulti) args.value = ['us'];
    }
    
    return (
      <div style={{ width: 320, paddingBottom: 250 }}>
        <Select {...args} />
      </div>
    );
  }
};
