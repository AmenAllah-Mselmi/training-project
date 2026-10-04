import { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'width' | 'height' | 'prefix'> {
  /** Label for the input */
  label?: string;
  /** Toggle whether the label row is displayed at all */
  hasLabel?: boolean;
  /** Tooltip content for the info icon next to the label. If provided, the icon is displayed. */
  infoContent?: string;
  /** Whether to show the "(Optional)" text next to the label */
  isOptional?: boolean;
  /** Error message to display below the input. Takes precedence over captionMessage */
  errorMessage?: string;
  /** Helper text to display below the input */
  captionMessage?: string;
  /** Size of the input field */
  size?: InputSize;
  /** Custom border (e.g., '2px solid red') */
  border?: string;
  /** Custom border radius */
  borderRadius?: string | number;
  
  /** Toggle whether the start icon is displayed */
  hasStartIcon?: boolean;
  /** Icon to display at the start of the input */
  startIcon?: ReactNode;
  
  /** Toggle whether the end icon (or shortcut badge) is displayed */
  hasEndIcon?: boolean;
  /** Icon to display at the end of the input (e.g. shortcut badge) */
  endIcon?: ReactNode;

  /** Toggle whether the prefix block is displayed */
  hasPrefix?: boolean;
  /** Prefix text or element (e.g. "https://") */
  prefix?: string | ReactNode;
  
  /** Toggle whether the suffix block is displayed */
  hasSuffix?: boolean;
  /** Suffix text or element (e.g. "suffix" or "kg") */
  suffix?: string | ReactNode;
}
