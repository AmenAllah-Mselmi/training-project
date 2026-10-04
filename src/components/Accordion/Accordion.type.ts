import { HTMLAttributes, ReactNode } from 'react';

export type AccordionVariant = 'minimal' | 'outline' | 'filled';
export type AccordionTheme = 'light' | 'dark';

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The title of the accordion */
  title?: string;
  /** The content to reveal when expanded */
  content?: ReactNode;
  /** Optional icon to render on the left of the title */
  leftIcon?: ReactNode;
  /** Visual variant of the accordion */
  variant?: AccordionVariant;
  /** Theme of the accordion (light or dark mode) */
  theme?: AccordionTheme;
  /** Whether the accordion is open (controlled/testing) */
  isOpen?: boolean;
  /** Whether to show a 'Read more' link at the bottom of the content */
  hasReadMore?: boolean;
  /** Optional click handler for the 'Read more' link */
  onReadMoreClick?: () => void;
}
