import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'solid' | 'soft' | 'outline' | 'ghost';
export type ButtonColor = 'primary' | 'neutral' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonRadius = 'none' | 'small' | 'medium' | 'full';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The text to display inside the button */
  label?: string;
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Color theme */
  color?: ButtonColor;
  /** Size of the button */
  size?: ButtonSize;
  /** Border radius of the button */
  borderRadius?: ButtonRadius;
  
  /** Whether to show a left icon */
  hasLeftIcon?: boolean;
  /** Whether to show a right icon */
  hasRightIcon?: boolean;
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** Whether to render as an icon-only button (hides label) */
  iconOnly?: boolean;
  
  /** Automatically configures the button with a brand logo */
  brand?: 'none' | 'google' | 'facebook' | 'twitter' | 'apple';
}
