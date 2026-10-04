import React from 'react';
import type { ListItemProps } from './ListItem.type';
import * as S from './ListItem.style';

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(({
  title,
  description,
  leftContent,
  rightContent,
  size = 'medium',
  disabled = false,
  interactive = false,
  children,
  className,
  ...props
}, ref) => {
  return (
    <S.Container 
      ref={ref} 
      size={size} 
      disabled={disabled} 
      interactive={interactive}
      className={className} 
      {...props}
    >
      {leftContent && <S.LeftSlot>{leftContent}</S.LeftSlot>}
      
      <S.Content>
        {title && <S.Title size={size}>{title}</S.Title>}
        {description && <S.Description size={size}>{description}</S.Description>}
        {children}
      </S.Content>
      
      {rightContent && <S.RightSlot>{rightContent}</S.RightSlot>}
    </S.Container>
  );
});

ListItem.displayName = 'ListItem';
