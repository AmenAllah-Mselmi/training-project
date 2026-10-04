import React from 'react';
import type { DialogProps } from './Dialog.type';
import * as S from './Dialog.style';

export const Dialog: React.FC<DialogProps> = ({
  title,
  description,
  primaryActionLabel,
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  layout = 'vertical',
  theme = 'light',
  size = 'medium',
  backgroundImage,
  className,
}) => {
  return (
    <S.DialogContainer layout={layout} theme={theme} size={size} bgImage={backgroundImage} className={className}>
      <S.ContentContainer layout={layout}>
        <S.Title theme={theme}>{title}</S.Title>
        <S.Description theme={theme}>{description}</S.Description>
      </S.ContentContainer>
      <S.ActionsContainer>
        <S.PrimaryButton type="button" theme={theme} onClick={onPrimaryAction}>
          {primaryActionLabel}
        </S.PrimaryButton>
        {secondaryActionLabel && (
          <S.SecondaryButton type="button" theme={theme} onClick={onSecondaryAction}>
            {secondaryActionLabel}
          </S.SecondaryButton>
        )}
      </S.ActionsContainer>
    </S.DialogContainer>
  );
};

Dialog.displayName = 'Dialog';
