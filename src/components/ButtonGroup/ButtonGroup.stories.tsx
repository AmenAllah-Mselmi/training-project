import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';
import { ListItem } from '../ListItem/ListItem';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    attached: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    gap: { control: 'number' },
    // Custom arg for Storybook to dynamically render buttons
    numberOfButtons: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'Storybook only: Number of buttons to render in the group',
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type StoryArgs = React.ComponentProps<typeof ButtonGroup> & {
  numberOfButtons?: number;
};
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    attached: false,
    gap: 8,
    fullWidth: false,
    numberOfButtons: 3,
  },
  render: ({ numberOfButtons = 3, ...args }) => (
    <ListItem
      title="Action Group"
      description="Adjust numberOfButtons below to see how it scales."
      size="large"
      rightContent={
        <ButtonGroup {...args}>
          {Array.from({ length: numberOfButtons }).map((_, i) => (
            <Button 
              key={i} 
              label={numberOfButtons > 4 && args.attached ? undefined : `Button ${i + 1}`}
              iconOnly={numberOfButtons > 4 && args.attached}
              hasRightIcon={numberOfButtons > 4 && args.attached}
              variant="solid" 
              color="primary" 
            />
          ))}
        </ButtonGroup>
      }
    />
  ),
};
