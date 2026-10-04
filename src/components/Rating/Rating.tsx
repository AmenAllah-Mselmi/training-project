import React, { useState, useEffect } from 'react';
import type { RatingProps } from './Rating.type';
import * as S from './Rating.style';
import { Avatar } from '../Avatar/Avatar';

// Custom solid star icon to match the design (instead of outlined empty stars)
const SolidStar = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(({
  variant = 'standard',
  value,
  defaultValue = 0,
  max = 5,
  precision = 1,
  readOnly = false,
  disabled = false,
  onChange,
  size = 'medium',
  color = 'warning',
  leftContent,
  rightContent,
  className,
}, ref) => {
  
  const [internalValue, setInternalValue] = useState<number | null>(
    value !== undefined ? value : defaultValue
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (event: React.SyntheticEvent, newValue: number | null) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const renderLeftContent = () => {
    if (variant === 'google') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      );
    }
    if (variant === 'avatars') {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src="https://i.pravatar.cc/150?u=1" size="small" />
          <Avatar src="https://i.pravatar.cc/150?u=2" size="small" style={{ marginLeft: '-8px' }} />
          <Avatar src="https://i.pravatar.cc/150?u=3" size="small" style={{ marginLeft: '-8px' }} />
          <Avatar src="https://i.pravatar.cc/150?u=4" size="small" style={{ marginLeft: '-8px' }} />
        </div>
      );
    }
    return leftContent;
  };

  // Automatically switch to blue stars if using google/avatars variant unless explicitly overridden
  const effectiveColor = (variant === 'google' || variant === 'avatars') && color === 'warning' ? 'primary' : color;

  return (
    <S.Container ref={ref} className={className} $size={size}>
      {renderLeftContent() && (
        <S.ContentWrapper>{renderLeftContent()}</S.ContentWrapper>
      )}
      
      <S.StyledRating
        value={internalValue}
        max={max}
        precision={precision}
        readOnly={readOnly}
        disabled={disabled}
        onChange={handleChange}
        $size={size}
        $color={effectiveColor}
        icon={<SolidStar />}
        emptyIcon={<SolidStar />}
      />
      
      {rightContent && (
        <S.ContentWrapper>{rightContent}</S.ContentWrapper>
      )}
    </S.Container>
  );
});

Rating.displayName = 'Rating';
