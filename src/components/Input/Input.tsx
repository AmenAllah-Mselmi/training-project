import React, { forwardRef } from 'react';
import type { InputProps } from './Input.type';
import * as S from './Input.style';

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

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ShortcutBadge = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '2px', backgroundColor: '#f1f5f9', padding: '4px 6px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, color: '#94a3b8' }}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
    </svg>
    <span>B</span>
  </div>
);

export const Input = forwardRef<HTMLInputElement, InputProps>(
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
      startIcon = <SearchIcon />,
      hasEndIcon = false,
      endIcon = <ShortcutBadge />,
      hasPrefix = false,
      prefix,
      hasSuffix = false,
      suffix,
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
          {hasPrefix && <S.PrefixWrapper>{prefix}</S.PrefixWrapper>}
          
          <S.MiddleSection>
            {hasStartIcon && startIcon && <S.StartIconWrapper>{startIcon}</S.StartIconWrapper>}
            <S.StyledInput ref={ref} id={inputId} disabled={disabled} {...rest} />
            {hasEndIcon && endIcon && <S.EndIconWrapper>{endIcon}</S.EndIconWrapper>}
          </S.MiddleSection>

          {hasSuffix && <S.SuffixWrapper>{suffix}</S.SuffixWrapper>}
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

Input.displayName = 'Input';
