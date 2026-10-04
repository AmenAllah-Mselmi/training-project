import { HTMLAttributes, ReactNode } from 'react';

export type ListItemSize = 'small' | 'medium' | 'large';

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Primary text or content */
  title?: ReactNode;
  /** Secondary text or content displayed below the title */
  description?: ReactNode;
  /** Slot for left-aligned content (e.g., icons, avatars, checkboxes) */
  leftContent?: ReactNode;
  /** Slot for right-aligned content (e.g., actions, badges, timestamps) */
  rightContent?: ReactNode;
  
  /** Controls the padding and spacing */
  size?: ListItemSize;
  /** Applies disabled styling */
  disabled?: boolean;
  /** Makes the item interactive (hover state, cursor pointer) */
  interactive?: boolean;
}
