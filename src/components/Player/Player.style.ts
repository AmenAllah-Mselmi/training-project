import styled from '@emotion/styled';
import type { PlayerSize, CenterButtonVariant, CenterButtonSize } from './Player.type';

const getPlayerWidth = (size: PlayerSize) => {
  switch (size) {
    case 'sm': return '280px';
    case 'md': return '480px';
    case 'lg': return '720px';
    case 'xl': return '960px';
    default: return '480px';
  }
};

const getCenterButtonSize = (size: CenterButtonSize) => {
  switch (size) {
    case 'sm': return 32;
    case 'md': return 48;
    case 'lg': return 64;
    case 'xl': return 80;
    default: return 64;
  }
};

export const PlayerContainer = styled.div<{ $size: PlayerSize; $posterSrc?: string }>`
  position: relative;
  width: ${({ $size }) => getPlayerWidth($size)};
  aspect-ratio: 16 / 9;
  background-color: #000;
  background-image: ${({ $posterSrc }) => ($posterSrc ? `url(${$posterSrc})` : 'none')};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.6) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const LiveBadge = styled.div`
  background-color: #ef4444;
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

export const CloseButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

export const CenterArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterButton = styled.button<{ $variant: CenterButtonVariant; $size: CenterButtonSize }>`
  position: relative;
  width: ${({ $size }) => getCenterButtonSize($size)}px;
  height: ${({ $size }) => getCenterButtonSize($size)}px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s;
  
  ${({ $variant }) => $variant === 'solid' ? `
    background-color: white;
    color: black;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    
    &::before {
      content: '';
      position: absolute;
      top: -12%;
      left: -12%;
      right: -12%;
      bottom: -12%;
      background-color: rgba(255, 255, 255, 0.25);
      border-radius: 50%;
      z-index: -1;
    }
  ` : `
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    backdrop-filter: blur(4px);
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  `}
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: 40%;
    height: 40%;
    margin-left: ${({ $isPlaying, $size }) => (!$isPlaying ? '5%' : '0')}; /* offset play icon slightly for visual center */
  }
`;

export const BottomControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
`;

export const ProgressFill = styled.div<{ $progress: number }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${({ $progress }) => $progress}%;
  background-color: white;
  border-radius: 2px;
  
  &::after {
    content: '';
    position: absolute;
    right: -4px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }
`;

export const ControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  opacity: 0.9;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const TimeText = styled.span`
  font-size: 12px;
  font-weight: 400;
  opacity: 0.9;
  font-variant-numeric: tabular-nums;
`;
