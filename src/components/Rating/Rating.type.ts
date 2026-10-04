import { ReactNode } from 'react';

export type RatingSize = 'small' | 'medium' | 'large';
export type RatingColor = 'primary' | 'warning';
export type RatingVariant = 'standard' | 'google' | 'avatars';

export interface RatingProps {
  /** Variant layout for the rating */
  variant?: RatingVariant;
  /** Current rating value */
  value?: number | null;
  /** Default value for uncontrolled usage */
  defaultValue?: number;
  /** Maximum rating value, usually 5 */
  max?: number;
  /** Step interval (e.g. 0.5 for half-star precision) */
  precision?: number;
  
  /** Makes the rating read-only */
  readOnly?: boolean;
  /** Disables the rating */
  disabled?: boolean;
  
  /** Callback fired when the value changes */
  onChange?: (value: number | null) => void;
  
  /** Size of the stars and text */
  size?: RatingSize;
  /** Color of the active stars */
  color?: RatingColor;
  
  /** Content to display on the left (e.g. Avatar group, Google icon, text) */
  leftContent?: ReactNode;
  /** Content to display on the right (e.g. "100K Happy clients") */
  rightContent?: ReactNode;
  
  className?: string;
}
