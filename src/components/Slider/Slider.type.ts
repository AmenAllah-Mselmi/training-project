import { ReactNode } from 'react';

export type SliderColor = 'primary' | 'danger' | 'success' | 'warning' | 'neutral';
export type SliderThumbShape = 'circle' | 'square';
export type SliderTrackVariant = 'solid' | 'graph';
export type SliderSize = 'small' | 'medium' | 'large';

export interface SliderProps {
  /** The size of the slider */
  size?: SliderSize;
  /** Whether the slider is a range slider with two thumbs */
  isRange?: boolean;
  /** The top-left label */
  label?: ReactNode;
  /** The bottom-left caption text */
  caption?: ReactNode;
  /** Shows an info icon next to the label */
  showInfo?: boolean;
  /** The top-right label (e.g., to display max value) */
  rightLabel?: ReactNode;
  
  /** Current value for controlled usage. Use array for range slider. */
  value?: number | number[];
  /** Default value for uncontrolled usage. Use array for range slider. */
  defaultValue?: number | number[];
  
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
  /** Step interval. Set to null if marks only. */
  step?: number | null;
  
  /** If true, shows tick marks at step intervals. Or provide array for custom marks. */
  marks?: boolean | { value: number; label?: ReactNode }[];
  
  /** Disables the slider */
  disabled?: boolean;
  
  /** Controls floating tooltip behavior */
  valueLabelDisplay?: 'on' | 'auto' | 'off';

  /** The color theme of the slider */
  color?: SliderColor;
  /** The shape of the drag thumb */
  thumbShape?: SliderThumbShape;
  /** The style of the track (solid line vs audio graph) */
  trackVariant?: SliderTrackVariant;
  /** Array of relative heights (0-100) for the graph bars if trackVariant='graph' */
  graphData?: number[];
  
  /** Callback fired when the value changes */
  onChange?: (value: number | number[]) => void;
  
  className?: string;
}
