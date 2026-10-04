import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Slider as MuiSlider } from '@mui/material';
import type { SliderColor, SliderThumbShape, SliderTrackVariant, SliderSize } from './Slider.type';

export const Container = styled.div<{ $size?: SliderSize }>`
  display: flex;
  flex-direction: column;
  width: ${({ $size }) => {
    switch ($size) {
      case 'small': return '240px';
      case 'large': return '480px';
      case 'medium':
      default: return '320px';
    }
  }};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const LabelRow = styled.div<{ $size?: SliderSize }>`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small': return '12px';
      case 'large': return '16px';
      default: return '14px';
    }
  }};
  font-weight: 600;
  color: #0f172a;
  
  svg {
    width: ${({ $size }) => ($size === 'large' ? '18px' : $size === 'small' ? '14px' : '16px')};
    height: ${({ $size }) => ($size === 'large' ? '18px' : $size === 'small' ? '14px' : '16px')};
    color: #94a3b8;
  }
`;

export const RightLabel = styled.div<{ $size?: SliderSize }>`
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small': return '12px';
      case 'large': return '16px';
      default: return '14px';
    }
  }};
  color: #64748b;
`;

export const Caption = styled.div<{ $size?: SliderSize }>`
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small': return '11px';
      case 'large': return '13px';
      default: return '12px';
    }
  }};
  color: #64748b;
  margin-top: 8px;
`;

const getColors = (color: SliderColor) => {
  switch (color) {
    case 'danger': return { main: '#ef4444', rail: '#fecaca' };
    case 'success': return { main: '#22c55e', rail: '#bbf7d0' };
    case 'warning': return { main: '#f59e0b', rail: '#fde68a' };
    case 'neutral': return { main: '#0f172a', rail: '#e2e8f0' };
    case 'primary':
    default: return { main: '#2563eb', rail: '#e2e8f0' };
  }
};

const getSizeConfig = (size: SliderSize) => {
  switch (size) {
    case 'small': return { track: '4px', thumb: '16px', radius: '4px' };
    case 'large': return { track: '8px', thumb: '32px', radius: '8px' };
    case 'medium':
    default: return { track: '6px', thumb: '24px', radius: '6px' };
  }
};

export const SliderRoot = styled.div<{ trackVariant: SliderTrackVariant }>`
  position: relative;
  width: 100%;
  margin-top: ${({ trackVariant }) => trackVariant === 'graph' ? '32px' : '0'};
`;

export const StyledSlider = styled(MuiSlider)<{ 
  $color: SliderColor; 
  $thumbShape: SliderThumbShape; 
  $trackVariant: SliderTrackVariant;
  $size: SliderSize;
}>`
  color: ${({ $color }) => getColors($color).main};
  height: ${({ $size }) => getSizeConfig($size).track};
  padding: 13px 0;
  
  &.Mui-disabled {
    color: #cbd5e1;
  }
  
  ${({ $trackVariant }) => $trackVariant === 'graph' && css`
    .MuiSlider-track, .MuiSlider-rail {
      opacity: 0 !important;
    }
  `}

  ${({ $trackVariant, $color, $size }) => $trackVariant === 'solid' && css`
    .MuiSlider-track {
      height: ${getSizeConfig($size).track};
      border: none;
      border-radius: 3px;
    }
    
    .MuiSlider-rail {
      height: ${getSizeConfig($size).track};
      opacity: 1;
      background-color: ${getColors($color).rail};
      border-radius: 3px;
    }
  `}
  
  .MuiSlider-thumb {
    height: ${({ $size }) => getSizeConfig($size).thumb};
    width: ${({ $size }) => getSizeConfig($size).thumb};
    background-color: #fff;
    border: 2px solid currentColor;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${({ $thumbShape }) => $thumbShape === 'square' ? css`
      border-radius: 6px;
    ` : css`
      border-radius: 50%;
    `}

    &:focus, &:hover, &.Mui-active, &.Mui-focusVisible {
      box-shadow: 0px 0px 0px 8px ${({ $color }) => getColors($color).main}26;
    }

    svg {
      color: currentColor;
    }
  }

  &.Mui-disabled .MuiSlider-thumb {
    background-color: #f1f5f9;
    border-color: #cbd5e1;
    color: #cbd5e1;
  }
  
  .MuiSlider-valueLabel {
    background-color: #1e293b;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 8px;
    
    &::before { display: none; }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 4px 4px 0;
      border-style: solid;
      border-color: #1e293b transparent transparent transparent;
    }
  }

  .MuiSlider-mark {
    background-color: #ffffff;
    height: 4px;
    width: 2px;
    border-radius: 1px;
    &.MuiSlider-markActive {
      opacity: 1;
      background-color: #ffffff;
    }
  }
  
  .MuiSlider-markLabel {
    font-size: 12px;
    color: #64748b;
    font-family: inherit;
    margin-top: 4px;
  }
`;

export const GraphBackground = styled.div`
  position: absolute;
  bottom: 50%;
  left: 12px;
  right: 12px;
  height: 36px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  pointer-events: none;
  gap: 3px;
`;

export const GraphBar = styled.div<{ 
  height: number; 
  active: boolean; 
  disabled: boolean; 
  $color: SliderColor;
}>`
  flex: 1;
  border-radius: 2px 2px 0 0;
  height: ${({ height }) => height}%;
  background-color: ${({ active, disabled, $color }) => {
    if (disabled) return active ? '#cbd5e1' : '#f1f5f9';
    const colors = getColors($color);
    return active ? colors.main : colors.rail;
  }};
  transition: background-color 0.2s;
`;
