import { HTMLAttributes } from 'react';

export type CursorVariant = 
  | 'default'
  | 'pointer'
  | 'grab'
  | 'grabbing'
  | 'zoom-in'
  | 'zoom-out'
  | 'move'
  | 'help'
  | 'text'
  | 'figma'
  | 'crosshair'
  | 'camera'
  | 'resize-nwse'
  | 'resize-nesw'
  | 'resize-ns'
  | 'resize-ew'
  | 'resize-row'
  | 'resize-col';

export interface CursorProps extends HTMLAttributes<HTMLDivElement> {
  /** The variant of the cursor to display */
  variant?: CursorVariant;
  /** Background color for Figma-style cursors */
  color?: string;
  /** Label for Figma-style cursors */
  label?: string;
  /** Size of the cursor (applies a scaling transform) */
  size?: number;
}
