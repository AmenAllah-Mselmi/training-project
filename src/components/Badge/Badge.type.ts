import { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'solid' | 'soft' | 'outline';
export type BadgeColor = 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'purple' | 'pink';
export type BadgeSize = 'small' | 'medium' | 'large';
export type BadgeRadius = 'small' | 'medium' | 'full';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** The text or number to display inside the badge */
  label?: string | number;
  /** Visual style variant */
  variant?: BadgeVariant;
  /** Color theme */
  color?: BadgeColor;
  /** Size of the badge */
  size?: BadgeSize;
  /** Border radius of the badge */
  borderRadius?: BadgeRadius;
  
  /** Whether to show a left icon */
  hasLeftIcon?: boolean;
  /** Whether to show a right icon */
  hasRightIcon?: boolean;
  /** Replaces the left icon with a colored dot */
  hasDot?: boolean;
  /** Renders the badge as a perfect circle/square for numbers (e.g. "4") */
  iconOnly?: boolean;
  
  /** Custom right content (e.g. for avatar groups in complex feature badges) */
  rightContent?: ReactNode;
}
