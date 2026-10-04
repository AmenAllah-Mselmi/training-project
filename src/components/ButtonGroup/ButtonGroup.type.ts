import { HTMLAttributes } from 'react';

export type ButtonGroupOrientation = 'horizontal' | 'vertical';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Layout orientation */
  orientation?: ButtonGroupOrientation;
  /** Whether the buttons should be attached to each other (removes rounded corners between them) */
  attached?: boolean;
  /** Gap between buttons (only applies if attached is false) */
  gap?: number;
  /** Whether the group should take up the full width */
  fullWidth?: boolean;
}
