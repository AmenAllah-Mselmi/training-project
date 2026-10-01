import { InputHTMLAttributes, ReactNode } from 'react';

export interface CardInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
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
  
  /** Toggle whether the end icon is displayed */
  hasEndIcon?: boolean;
  /** Icon to display at the end of the input */
  endIcon?: ReactNode;
}
