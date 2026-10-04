import React from 'react';
import type { ButtonGroupProps } from './ButtonGroup.type';
import * as S from './ButtonGroup.style';

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(({
  orientation = 'horizontal',
  attached = false,
  gap = 8,
  fullWidth = false,
  children,
  className,
  ...props
}, ref) => {
  return (
    <S.Container
      ref={ref}
      orientation={orientation}
      attached={attached}
      gap={gap}
      fullWidth={fullWidth}
      className={className}
      {...props}
    >
      {children}
    </S.Container>
  );
});

ButtonGroup.displayName = 'ButtonGroup';
