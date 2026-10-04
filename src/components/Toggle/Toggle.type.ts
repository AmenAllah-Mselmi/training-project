import { ReactNode } from 'react';

export type ToggleSize = 'small' | 'medium' | 'large';
export type ToggleVariant = 'standard' | 'card';
export type TogglePlacement = 'left' | 'right';

export interface ToggleProps {
  /** The checked state for controlled component */
  checked?: boolean;
  /** The default checked state for uncontrolled component */
  defaultChecked?: boolean;
  /** Disables the toggle */
  disabled?: boolean;
  /** Callback fired when the state is changed */
  onChange?: (checked: boolean) => void;
  
  /** Size of the toggle switch */
  size?: ToggleSize;
  /** Layout variant (standard inline vs bordered card) */
  variant?: ToggleVariant;
  /** Placement of the toggle switch relative to the content */
  togglePlacement?: TogglePlacement;
  
  // Content Props
  /** Main label */
  label?: ReactNode;
  /** Sublabel placed next to the main label */
  subLabel?: ReactNode;
  /** Badge text or component placed next to the subLabel */
  badge?: ReactNode;
  /** Description text placed below the labels */
  description?: ReactNode;
  /** Link text placed below the description */
  link?: ReactNode;
  /** Callback for when the link is clicked */
  onLinkClick?: () => void;
  
  /** Text placed on the far right (useful for card variant, e.g., "Free") */
  rightTitle?: ReactNode;
  /** Subtext placed below the rightTitle (e.g., "Helper Text") */
  rightDescription?: ReactNode;
  /** Custom content to display on the far right */
  rightContent?: ReactNode;
  
  /** Optional label to place on the far left of the toggle */
  leftLabel?: ReactNode;

  className?: string;
}
