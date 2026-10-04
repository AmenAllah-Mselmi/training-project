import React, { forwardRef } from 'react';
import type { PlayerProps } from './Player.type';
import * as S from './Player.style';

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const VolumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
  </svg>
);

const SubtitlesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 4H5C3.89 4 3 4.9 3 6v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6C21 4.9 20.1 4 19 4zM7 15H5v-2h2v2zm4 0H9v-2h2v2zm8 0h-6v-2h6v2z" />
  </svg>
);

const FullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
  </svg>
);

const LiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="8" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Player = forwardRef<HTMLDivElement, PlayerProps>(
  (
    {
      posterSrc = 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1441&auto=format&fit=crop',
      size = 'md',
      isLive = false,
      showClose = true,
      isPlaying = false,
      currentTime = '12:44',
      totalTime = '1:12:14',
      progress = 30,
      showCenterButton = true,
      centerButtonVariant = 'solid',
      centerButtonSize = 'md',
      showControls = true,
      ...rest
    },
    ref
  ) => {
    return (
      <S.PlayerContainer ref={ref} $size={size} $posterSrc={posterSrc} {...rest}>
        <S.Overlay>
          <S.TopBar>
            {isLive ? (
              <S.LiveBadge>
                <LiveIcon /> LIVE
              </S.LiveBadge>
            ) : (
              <div /> // Placeholder to keep flex-between layout correct if only close button is present
            )}
            {showClose && (
              <S.CloseButton>
                <CloseIcon />
              </S.CloseButton>
            )}
          </S.TopBar>

          <S.CenterArea>
            {showCenterButton && (
              <S.CenterButton 
                $variant={centerButtonVariant} 
                $size={centerButtonSize}
                // @ts-ignore styled component custom prop 
                $isPlaying={isPlaying}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </S.CenterButton>
            )}
          </S.CenterArea>

          {showControls && (
            <S.BottomControls>
              <S.ProgressBarContainer>
                <S.ProgressFill $progress={progress} />
              </S.ProgressBarContainer>
              
              <S.ControlBar>
                <S.ControlGroup>
                  <S.IconButton>
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </S.IconButton>
                  <S.IconButton>
                    <VolumeIcon />
                  </S.IconButton>
                  <S.TimeText>
                    {currentTime} / {totalTime}
                  </S.TimeText>
                </S.ControlGroup>
                
                <S.ControlGroup>
                  <S.IconButton>
                    <SettingsIcon />
                  </S.IconButton>
                  <S.IconButton>
                    <SubtitlesIcon />
                  </S.IconButton>
                  <S.IconButton>
                    <FullscreenIcon />
                  </S.IconButton>
                </S.ControlGroup>
              </S.ControlBar>
            </S.BottomControls>
          )}
        </S.Overlay>
      </S.PlayerContainer>
    );
  }
);

Player.displayName = 'Player';
