import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height' | 'prefix'> {
  /** Label for the input */
  label?: string;
  /** Toggle whether the label row is displayed at all */
  hasLabel?: boolean;
  /** Toggle whether the info icon next to the label is displayed */
  hasLabelInfo?: boolean;
  /** Whether to show the "(Optional)" text next to the label */
  isOptional?: boolean;
  /** Error message to display below the input. Takes precedence over captionMessage */
  errorMessage?: string;
  /** Helper text to display below the input */
  captionMessage?: string;
  /** Width of the input container */
  width?: string | number;
  /** Height of the input field */
  height?: string | number;
  
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
