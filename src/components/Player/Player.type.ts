import { HTMLAttributes } from 'react';

export type PlayerSize = 'sm' | 'md' | 'lg' | 'xl';
export type CenterButtonVariant = 'solid' | 'translucent';
export type CenterButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface PlayerProps extends HTMLAttributes<HTMLDivElement> {
  /** The poster image or video thumbnail url */
  posterSrc?: string;
  /** Size of the overall video player */
  size?: PlayerSize;
  /** Whether the video is marked as LIVE */
  isLive?: boolean;
  /** Whether to show the top-right close button */
  showClose?: boolean;
  /** Whether the video is currently playing */
  isPlaying?: boolean;
  /** Current time string (e.g. '12:44') */
  currentTime?: string;
  /** Total time string (e.g. '1:12:14') */
  totalTime?: string;
  /** Progress percentage (0 to 100) */
  progress?: number;
  /** Whether to show the center play/pause button overlay */
  showCenterButton?: boolean;
  /** Variant of the center button */
  centerButtonVariant?: CenterButtonVariant;
  /** Size of the center button */
  centerButtonSize?: CenterButtonSize;
  /** Whether to show the bottom control bar */
  showControls?: boolean;
}
