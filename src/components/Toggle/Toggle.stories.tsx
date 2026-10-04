import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'radio',
      options: ['standard', 'card'],
    },
    togglePlacement: {
      control: 'radio',
      options: ['left', 'right'],
    },
    label: { control: 'text' },
    subLabel: { control: 'text' },
    badge: { control: 'text' },
    description: { control: 'text' },
    link: { control: 'text' },
    leftLabel: { control: 'text' },
    rightTitle: { control: 'text' },
    rightDescription: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// As requested, only one format/story (Default) with all properties controlled via props
export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'standard',
    togglePlacement: 'left',
    label: 'Label',
    subLabel: 'Sublable',
    badge: 'Label',
    description: 'Description Text',
    link: 'Link',
    leftLabel: '',
    rightTitle: '',
    rightDescription: '',
    disabled: false,
    defaultChecked: false,
  },
};
