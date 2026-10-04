import React from 'react';
import type { DividerProps } from './Divider.type';
import * as S from './Divider.style';

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export const Divider: React.FC<DividerProps> = ({
  thickness = 'thin',
  align = 'center',
  variant = 'line',
  color = 'gray',
  text,
  buttonLabel,
  buttonPosition = 'center',
  hasButtonIcon,
  iconOnly,
  labels,
  className,
}) => {
  let centerContent = null;
  if (labels && labels.length > 0) {
    centerContent = (
      <S.StyledButtonGroup>
        {labels.map((label, index) => (
          <S.StyledGroupButton key={index}>{label}</S.StyledGroupButton>
        ))}
      </S.StyledButtonGroup>
    );
  } else if (iconOnly) {
    centerContent = <S.StyledIconButton><PlusIcon /></S.StyledIconButton>;
  } else if (buttonLabel && buttonPosition === 'center') {
    centerContent = (
      <S.StyledButton>
        {hasButtonIcon && <PlusIcon />}
        {buttonLabel}
      </S.StyledButton>
    );
  } else if (text) {
    centerContent = text;
  }

  let rightContent = null;
  if (buttonLabel && buttonPosition === 'right') {
    rightContent = (
      <S.StyledButton>
        {hasButtonIcon && <PlusIcon />}
        {buttonLabel}
      </S.StyledButton>
    );
  }

  if (variant === 'decorative') {
    return (
      <S.Container variant={variant} className={className}>
        <S.DecorativeLine color={color} thickness={thickness} />
      </S.Container>
    );
  }

  if (variant === 'block') {
    return (
      <S.Container variant={variant} className={className}>
        {centerContent && (
          <S.Content align="left" variant={variant}>
            {centerContent}
          </S.Content>
        )}
        {rightContent && (
          <>
            <S.Spacer />
            <S.RightContent variant={variant}>{rightContent}</S.RightContent>
          </>
        )}
      </S.Container>
    );
  }

  const hasCenterContent = !!centerContent;

  return (
    <S.Container variant={variant} className={className}>
      {(!hasCenterContent || align === 'center' || align === 'right') && (
        <S.Line thickness={thickness} />
      )}
      
      {hasCenterContent && (
        <S.Content align={align} variant={variant}>
          {centerContent}
        </S.Content>
      )}

      {(!hasCenterContent || align === 'center' || align === 'left') && (
        <S.Line thickness={thickness} />
      )}
      
      {rightContent && (
        <S.RightContent variant={variant}>
          {rightContent}
        </S.RightContent>
      )}
    </S.Container>
  );
};

Divider.displayName = 'Divider';
