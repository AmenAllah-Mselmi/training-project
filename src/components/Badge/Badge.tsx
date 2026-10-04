import React from 'react';
import type { BadgeProps } from './Badge.type';
import * as S from './Badge.style';

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);

const CrossIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
  label = 'Label',
  variant = 'solid',
  color = 'primary',
  size = 'medium',
  borderRadius = 'full',
  hasLeftIcon = false,
  hasRightIcon = false,
  hasDot = false,
  iconOnly = false,
  rightContent,
  children,
  ...props
}, ref) => {

  const actualLabel = children || label;
  
  let leftElement = null;
  if (hasDot) {
    leftElement = <S.Dot variant={variant} color={color} />;
  } else if (hasLeftIcon) {
    if (color === 'success') leftElement = <CheckIcon />;
    else if (color === 'danger') leftElement = <CrossIcon />;
    else if (color === 'primary') leftElement = <InfoIcon />;
    else leftElement = <TargetIcon />;
  }

  const content = iconOnly ? (
    actualLabel 
  ) : (
    <>
      {leftElement}
      <span>{actualLabel}</span>
      {rightContent}
      {hasRightIcon && <ChevronRight />}
    </>
  );

  return (
    <S.StyledBadge
      ref={ref}
      variant={variant}
      color={color}
      size={size}
      borderRadius={borderRadius}
      iconOnly={iconOnly}
      {...props}
    >
      {content}
    </S.StyledBadge>
  );
});

Badge.displayName = 'Badge';
