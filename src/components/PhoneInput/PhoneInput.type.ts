import { InputHTMLAttributes } from 'react';

export interface PhoneInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
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
}
