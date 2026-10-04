import React from 'react';
import type { CursorProps } from './Cursor.type';
import * as S from './Cursor.style';

const DefaultSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3L18 15H12L9 21L6 3Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const PointerSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 11V5C10 4.4 9.6 4 9 4C8.4 4 8 4.4 8 5V13.5L5.7 12.4C5.3 12.2 4.7 12.3 4.4 12.7L3 14.5L7 19.5C7.5 20.2 8.4 20.5 9.2 20.5H14C15.1 20.5 16 19.6 16 18.5V11.5C16 10.9 15.6 10.5 15 10.5C14.8 10.5 14.7 10.6 14.5 10.6C14.4 9.9 13.8 9.5 13 9.5C12.8 9.5 12.7 9.5 12.5 9.6C12.4 8.9 11.8 8.5 11 8.5C10.6 8.5 10.3 8.7 10.1 8.9V11" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const GrabSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 8V5C10 4.4 9.6 4 9 4C8.4 4 8 4.4 8 5V13M10 8C10 7.4 10.4 7 11 7C11.6 7 12 7.4 12 8V13M12 9C12 8.4 12.4 8 13 8C13.6 8 14 8.4 14 9V13M14 10C14 9.4 14.4 9 15 9C15.6 9 16 9.4 16 10V15C16 17.2 14.2 19 12 19H10C8.6 19 7.3 18.3 6.6 17.1L4 12V9C4 8.4 4.4 8 5 8C5.6 8 6 8.4 6 9V13" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const GrabbingSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 11V6C10 5.4 9.6 5 9 5C8.4 5 8 5.4 8 6V11M10 11C10 10.4 10.4 10 11 10C11.6 10 12 10.4 12 11V11M12 11C12 10.4 12.4 10 13 10C13.6 10 14 10.4 14 11V11M14 11C14 10.4 14.4 10 15 10C15.6 10 16 10.4 16 11V15C16 17.2 14.2 19 12 19H9C7.6 19 6.3 18.3 5.6 17.1L4 14.5V11C4 10.4 4.4 10 5 10C5.6 10 6 10.4 6 11V13" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const ZoomInSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="6" fill="white" stroke="black" strokeWidth="1.5"/>
    <path d="M15 15L20 20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 7V13M7 10H13" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ZoomOutSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="6" fill="white" stroke="black" strokeWidth="1.5"/>
    <path d="M15 15L20 20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 10H13" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MoveSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V22M2 12H22M12 2L9 5M12 2L15 5M12 22L9 19M12 22L15 19M2 12L5 9M2 12L5 15M22 12L19 9M22 12L19 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HelpSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 6L14 13H10L8 17L7 6Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M16 15C16 14.5 16.5 14 17 13.5C17.5 13 18 12.5 18 11.5C18 10.1 16.9 9 15.5 9C14.1 9 13 10.1 13 11.5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="15.5" cy="18" r="1" fill="black"/>
  </svg>
);

const TextSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4V20M8 4H16M8 20H16" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CrosshairSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1.5"/>
    <path d="M12 2V22M2 12H22" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CameraSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="16" height="12" rx="2" stroke="black" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="1.5"/>
    <path d="M9 6L10 4H14L15 6" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ResizeNWSESvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6L18 18M6 6H11M6 6V11M18 18H13M18 18V13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ResizeNESWSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M18 6H13M18 6V11M6 18H11M6 18V13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ResizeNSSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4V20M12 4L9 7M12 4L15 7M12 20L9 17M12 20L15 17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ResizeEWSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12H20M4 12L7 9M4 12L7 15M20 12L17 9M20 12L17 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ResizeRowSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12H20M12 4V8M12 4L9 7M12 4L15 7M12 20V16M12 20L9 17M12 20L15 17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ResizeColSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4V20M4 12H8M4 12L7 9M4 12L7 15M20 12H16M20 12L17 9M20 12L17 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FigmaSvg = ({ color = '#0ea5e9' }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3L18 15H12L9 21L6 3Z" fill={color} stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const Cursor = React.forwardRef<HTMLDivElement, CursorProps>(({
  variant = 'default',
  color = '#0ea5e9',
  label,
  size,
  ...props
}, ref) => {
  const renderCursor = () => {
    switch (variant) {
      case 'pointer': return <PointerSvg />;
      case 'grab': return <GrabSvg />;
      case 'grabbing': return <GrabbingSvg />;
      case 'zoom-in': return <ZoomInSvg />;
      case 'zoom-out': return <ZoomOutSvg />;
      case 'move': return <MoveSvg />;
      case 'help': return <HelpSvg />;
      case 'text': return <TextSvg />;
      case 'figma': return <FigmaSvg color={color} />;
      case 'crosshair': return <CrosshairSvg />;
      case 'camera': return <CameraSvg />;
      case 'resize-nwse': return <ResizeNWSESvg />;
      case 'resize-nesw': return <ResizeNESWSvg />;
      case 'resize-ns': return <ResizeNSSvg />;
      case 'resize-ew': return <ResizeEWSvg />;
      case 'resize-row': return <ResizeRowSvg />;
      case 'resize-col': return <ResizeColSvg />;
      case 'default':
      default:
        return <DefaultSvg />;
    }
  };

  return (
    <S.CursorWrapper ref={ref} $size={size} {...props}>
      {renderCursor()}
      {variant === 'figma' && label && (
        <S.FigmaLabel $color={color}>{label}</S.FigmaLabel>
      )}
    </S.CursorWrapper>
  );
});

Cursor.displayName = 'Cursor';
