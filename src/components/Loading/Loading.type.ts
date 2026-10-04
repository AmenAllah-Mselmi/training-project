import { HTMLAttributes } from 'react';

export type LoadingVariant = 'ring' | 'dots';
export type LoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type LoadingColor = 'primary' | 'danger' | 'neutral' | 'white' | (string & {});

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  /** The visual variant of the spinner */
  variant?: LoadingVariant;
  /** Size of the spinner */
  size?: LoadingSize;
  /** Color theme of the spinner */
  color?: LoadingColor;
}
