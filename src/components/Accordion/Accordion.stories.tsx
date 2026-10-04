import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the accordion',
    },
    content: {
      control: 'text',
      description: 'The content to reveal when expanded',
    },
    variant: {
      control: 'radio',
      options: ['minimal', 'outline', 'filled'],
      description: 'Visual style of the accordion',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Color theme of the accordion',
    },
    isOpen: {
      control: 'boolean',
      description: 'Force the open/closed state (overrides internal state)',
    },
    hasReadMore: {
      control: 'boolean',
      description: 'Show or hide the "Read more ->" link',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: 'According Title',
    content: 'Placeholder for accordion text.',
    variant: 'minimal',
    theme: 'light',
    hasReadMore: true,
  },
  render: (args) => {
    // Wrap in a div to simulate dark mode background if testing dark theme
    const bg = args.theme === 'dark' ? '#334155' : 'transparent';
    const padding = '24px';
    
    return (
      <div style={{ backgroundColor: bg, padding, minHeight: '300px', width: '100%' }}>
        <Accordion {...args} />
        <br />
        <Accordion {...args} title="Second According Title" />
        <br />
        <Accordion {...args} title="Third According Title" />
      </div>
    );
  }
};
