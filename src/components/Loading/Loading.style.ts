import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { LoadingSize, LoadingColor } from './Loading.type';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const getSize = (size: LoadingSize = 'md') => {
  switch (size) {
    case 'xs': return 16;
    case 'sm': return 24;
    case 'md': return 32;
    case 'lg': return 48;
    case 'xl': return 64;
    default: return 32;
  }
};

const getColor = (color: LoadingColor = 'neutral') => {
  switch (color) {
    case 'primary': return '#0ea5e9'; // blue
    case 'danger': return '#ef4444'; // red
    case 'neutral': return '#64748b'; // slate/gray
    case 'white': return '#ffffff';
    default: return color;
  }
};

export const LoadingContainer = styled.div<{ $size?: LoadingSize; $color?: LoadingColor }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => getSize($size)}px;
  height: ${({ $size }) => getSize($size)}px;
  color: ${({ $color }) => getColor($color)};
`;

export const RingSvg = styled.svg`
  animation: ${spin} 1s linear infinite;
  width: 100%;
  height: 100%;

  circle {
    stroke: currentColor;
    stroke-width: 4;
    stroke-linecap: round;
    fill: none;
    /* Create a gap in the ring */
    stroke-dasharray: 80 20;
    stroke-dashoffset: 0;
  }
`;

export const DotsSvg = styled.svg`
  animation: ${spin} 1.2s steps(8, end) infinite;
  width: 100%;
  height: 100%;

  circle {
    fill: currentColor;
  }
`;
