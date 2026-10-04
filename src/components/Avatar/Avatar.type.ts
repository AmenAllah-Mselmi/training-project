import { HTMLAttributes } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** The image source URL */
  src?: string;
  /** Fallback initials if image fails or is omitted */
  initials?: string;
  /** Size of the avatar */
  size?: AvatarSize;
  /** Fallback background color */
  bgColor?: string;
  
  /** Name/Title displayed next to the avatar */
  title?: string;
  /** Subtitle/Caption displayed below the title */
  subtitle?: string;
  /** Show verified blue badge next to title */
  isVerified?: boolean;
  /** Show an add icon to the left of the avatar */
  showAddAction?: boolean;
  
  /** 
   * Array of avatars to render a group. 
   * If provided, replaces the single avatar.
   */
  group?: { src?: string; initials?: string; bgColor?: string }[];
  /** Maximum number of avatars to show in a group before "+X" */
  maxGroup?: number;
  /** Explicit remaining count (e.g., 44 for "+44"). Defaults to group.length - maxGroup if omitted. */
  remainingCount?: number;
}
