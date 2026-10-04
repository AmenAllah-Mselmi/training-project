import { HTMLAttributes, ReactNode } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  icon?: ReactNode; // e.g. Avatar, Flag, etc.
}

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Label for the select */
  label?: string;
  /** Whether to show the label */
  hasLabel?: boolean;
  /** Content for the info tooltip */
  infoContent?: string;
  /** Whether the field is optional */
  isOptional?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Caption text below the input */
  captionMessage?: string;
  
  /** Size of the input */
  size?: 'small' | 'medium' | 'large';
  /** Start icon (e.g. Plus, Avatar) */
  startIcon?: ReactNode;
  /** Whether it supports multiple selection */
  isMulti?: boolean;
  /** Array of selected values */
  value?: string | string[];
  /** Options for the dropdown */
  options?: SelectOption[];
  
  /** Whether to show the search input inside the dropdown */
  showSearch?: boolean;
  /** Placeholder for search */
  searchPlaceholder?: string;
  /** Placeholder for select input */
  placeholder?: string;
  /** For Tag Input variant: render tags inside */
  isTagInput?: boolean;
  /** Tags array for Tag Input */
  tags?: string[];
  
  /** For testing/storybook: force open state */
  isOpen?: boolean;
  
  /** onChange handler */
  onChange?: (value: string | string[]) => void;
}
