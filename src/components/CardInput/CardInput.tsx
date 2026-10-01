import React, { forwardRef } from 'react';
import type { CardInputProps } from './CardInput.type';
import * as S from './CardInput.style';

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);

const StartCardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="3" ry="3" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <rect x="5" y="14" width="4" height="2" fill="currentColor" stroke="none" />
  </svg>
);

const EndCardIcon = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9', padding: '4px 6px', borderRadius: '4px' }}>
    <svg viewBox="0 0 24 24" width="16" height="16">
      <circle cx="18" cy="8" r="2.5" fill="#94a3b8" />
      <line x1="4" y1="18" x2="12" y2="18" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <line x1="16" y1="18" x2="20" y2="18" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </div>
);

export const CardInput = forwardRef<HTMLInputElement, CardInputProps>(
  (
    {
      label,
      hasLabel = true,
      hasLabelInfo = true,
      isOptional,
      errorMessage,
      captionMessage,
      width,
      height = '44px',
      hasStartIcon = true,
      startIcon = <StartCardIcon />,
      hasEndIcon = true,
      endIcon = <EndCardIcon />,
      className,
      id,
      disabled,
      ...rest
    },
    ref
  ) => {
    const inputId = id || (label && typeof label === 'string' ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
    const hasError = !!errorMessage;
    const message = errorMessage || captionMessage;

    return (
      <S.Container width={width} className={className} disabled={disabled}>
        {hasLabel && (label || isOptional) && (
          <S.LabelContainer>
            {label && <S.LabelText htmlFor={inputId}>{label}</S.LabelText>}
            {isOptional && <S.OptionalText>(Optional)</S.OptionalText>}
            {hasLabelInfo && (
              <S.InfoIconWrapper>
                <InfoIcon />
              </S.InfoIconWrapper>
            )}
          </S.LabelContainer>
        )}

        <S.InputWrapper height={height} hasError={hasError} disabled={disabled}>
          {hasStartIcon && startIcon && <S.StartIconWrapper>{startIcon}</S.StartIconWrapper>}
          <S.StyledInput ref={ref} id={inputId} disabled={disabled} {...rest} />
          {hasEndIcon && endIcon && <S.EndIconWrapper>{endIcon}</S.EndIconWrapper>}
        </S.InputWrapper>

        {message && (
          <S.BottomMessage isError={hasError}>
            {hasError ? <ErrorIcon /> : <InfoIcon />}
            <span>{message}</span>
          </S.BottomMessage>
        )}
      </S.Container>
    );
  }
);

CardInput.displayName = 'CardInput';
