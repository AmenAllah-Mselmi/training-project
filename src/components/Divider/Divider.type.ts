import { ReactNode } from 'react';

export type DividerThickness = 'thin' | 'medium' | 'thick';
export type DividerAlign = 'left' | 'center' | 'right';
export type DividerVariant = 'line' | 'block' | 'decorative';
export type DividerColor = 'gray' | 'blue' | 'red' | 'light';

export interface DividerProps {
  /** The thickness of the line (only applies to 'line' variant) */
  thickness?: DividerThickness;
  /** Alignment of the children (content) */
  align?: DividerAlign;
  /** Visual variant of the divider */
  variant?: DividerVariant;
  /** Color theme for the decorative variant */
  color?: DividerColor;
  /** Text to display inside the divider */
  text?: string;
  /** Label for a button inside the divider */
  buttonLabel?: string;
  /** Where to position the button */
  buttonPosition?: 'center' | 'right';
  /** Whether the button should have a plus icon */
  hasButtonIcon?: boolean;
  /** Whether to render just a plus icon button (overrides buttonLabel) */
  iconOnly?: boolean;
  /** Array of labels to render as a pill group in the center */
  labels?: string[];
  className?: string;
}
