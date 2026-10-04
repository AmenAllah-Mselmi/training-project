import React from 'react';
import type { LoadingProps } from './Loading.type';
import * as S from './Loading.style';

export const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(({
  variant = 'ring',
  size = 'md',
  color = 'neutral',
  ...props
}, ref) => {
  return (
    <S.LoadingContainer ref={ref} $size={size} $color={color} {...props}>
      {variant === 'ring' ? (
        <S.RingSvg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" />
        </S.RingSvg>
      ) : (
        <S.DotsSvg viewBox="0 0 100 100">
          <circle cx="50" cy="15" r="8" opacity="1" />
          <circle cx="75" cy="25" r="8" opacity="0.875" />
          <circle cx="85" cy="50" r="8" opacity="0.75" />
          <circle cx="75" cy="75" r="8" opacity="0.625" />
          <circle cx="50" cy="85" r="8" opacity="0.5" />
          <circle cx="25" cy="75" r="8" opacity="0.375" />
          <circle cx="15" cy="50" r="8" opacity="0.25" />
          <circle cx="25" cy="25" r="8" opacity="0.125" />
        </S.DotsSvg>
      )}
    </S.LoadingContainer>
  );
});

Loading.displayName = 'Loading';
