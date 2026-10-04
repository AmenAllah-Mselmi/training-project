export type DialogLayout = 'vertical' | 'horizontal';
export type DialogTheme = 'light' | 'image';
export type DialogSize = 'small' | 'medium' | 'large';

export interface DialogProps {
  /** The title of the dialog */
  title: string;
  /** The description text of the dialog */
  description: string;
  /** The label for the primary action button */
  primaryActionLabel: string;
  /** Callback for when the primary action button is clicked */
  onPrimaryAction?: () => void;
  /** The label for the secondary action button (if omitted, the button won't render) */
  secondaryActionLabel?: string;
  /** Callback for when the secondary action button is clicked */
  onSecondaryAction?: () => void;
  /** The layout orientation of the dialog */
  layout?: DialogLayout;
  /** The visual theme of the dialog */
  theme?: DialogTheme;
  /** The size of the dialog */
  size?: DialogSize;
  /** Custom background image URL for the 'image' theme */
  backgroundImage?: string;
  className?: string;
}
