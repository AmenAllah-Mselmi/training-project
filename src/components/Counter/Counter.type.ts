import { InputHTMLAttributes } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export interface CounterProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'width' | 'height'> {
  /** Label for the input */
  label?: string;
  /** Toggle whether the label row is displayed at all */
  hasLabel?: boolean;
  /** Whether to show the "(Optional)" text next to the label */
  isOptional?: boolean;
  /** Error message to display below the input. Takes precedence over captionMessage */
  errorMessage?: string;
  /** Helper text to display below the input */
  captionMessage?: string;
  /** Size of the input field */
  size?: InputSize;
  /** Layout variant for the counter */
  variant?: 'stepper' | 'stacked' | 'inline';
  /** Custom border */
  border?: string;
  /** Custom border radius */
  borderRadius?: string | number;
  /** Callback for increment button click */
  onIncrement?: () => void;
  /** Callback for decrement button click */
  onDecrement?: () => void;
}
