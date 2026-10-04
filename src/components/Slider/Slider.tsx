import React, { useState, useEffect } from 'react';
import type { SliderProps } from './Slider.type';
import * as S from './Slider.style';

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </svg>
);

const DragIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
    <rect x="8" y="6" width="2" height="12" rx="1" />
    <rect x="14" y="6" width="2" height="12" rx="1" />
  </svg>
);

function ThumbComponent(props: any) {
  const { children, className, ownerState, ...other } = props;
  const isSquare = className?.includes('thumb-square');
  
  return (
    <span className={className} {...other}>
      {isSquare && <DragIcon />}
      {children}
    </span>
  );
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(({
  label,
  caption,
  showInfo = false,
  rightLabel,
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  marks = false,
  disabled = false,
  valueLabelDisplay = 'auto',
  color = 'primary',
  thumbShape = 'circle',
  trackVariant = 'solid',
  size = 'medium',
  isRange = false,
  graphData = [],
  onChange,
  className,
}, ref) => {

  // If isRange is true, ensure we default to an array
  const defaultInitial = isRange ? [min + (max - min) * 0.25, min + (max - min) * 0.75] : min;
  
  const [internalValue, setInternalValue] = useState<number | number[]>(
    value !== undefined ? value : (defaultValue !== undefined ? defaultValue : defaultInitial)
  );

  // Sync external value
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // Handle Storybook toggling isRange dynamically
  useEffect(() => {
    if (value === undefined) {
      setInternalValue((prev) => {
        if (isRange && !Array.isArray(prev)) {
          return [min + (max - min) * 0.25, min + (max - min) * 0.75];
        } else if (!isRange && Array.isArray(prev)) {
          return prev[0] ?? min;
        }
        return prev;
      });
    }
  }, [isRange, min, max, value]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const isBarActive = (barIndex: number, totalBars: number) => {
    const percentage = barIndex / Math.max(1, totalBars - 1);
    const barVal = min + percentage * (max - min);
    
    if (Array.isArray(internalValue)) {
      return barVal >= internalValue[0] && barVal <= internalValue[1];
    }
    return barVal <= internalValue;
  };

  return (
    <S.Container ref={ref} className={className} $size={size}>
      {(label || rightLabel) && (
        <S.Header>
          <S.LabelRow $size={size}>
            {label}
            {showInfo && <InfoIcon />}
          </S.LabelRow>
          {rightLabel && <S.RightLabel $size={size}>{rightLabel}</S.RightLabel>}
        </S.Header>
      )}
      
      <S.SliderRoot trackVariant={trackVariant}>
        {trackVariant === 'graph' && graphData.length > 0 && (
          <S.GraphBackground>
            {graphData.map((height, i) => (
              <S.GraphBar 
                key={i} 
                height={height} 
                active={isBarActive(i, graphData.length)}
                disabled={disabled}
                $color={color}
              />
            ))}
          </S.GraphBackground>
        )}
        
        <S.StyledSlider
          value={internalValue}
          min={min}
          max={max}
          step={step}
          marks={marks}
          disabled={disabled}
          valueLabelDisplay={valueLabelDisplay}
          onChange={handleChange}
          $color={color}
          $thumbShape={thumbShape}
          $trackVariant={trackVariant}
          $size={size}
          slots={{ thumb: ThumbComponent }}
          className={thumbShape === 'square' ? 'thumb-square' : ''}
        />
      </S.SliderRoot>
      
      {caption && <S.Caption $size={size}>{caption}</S.Caption>}
    </S.Container>
  );
});

Slider.displayName = 'Slider';
