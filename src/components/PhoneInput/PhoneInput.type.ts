import { InputHTMLAttributes } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export interface PhoneInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'width' | 'height'> {
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
}
