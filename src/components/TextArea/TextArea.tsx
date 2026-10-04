import React, { forwardRef, useState } from 'react';
import type { TextAreaProps } from './TextArea.type';
import * as S from './TextArea.style';

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

const TypeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 7 4 4 14 4 14 7" />
    <line x1="9" y1="20" x2="9" y2="4" />
    <polyline points="15 11 15 8 21 8 21 11" />
    <line x1="18" y1="20" x2="18" y2="8" />
  </svg>
);

const BoldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
  </svg>
);

const ItalicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="4" x2="10" y2="4" />
    <line x1="14" y1="20" x2="5" y2="20" />
    <line x1="15" y1="4" x2="9" y2="20" />
  </svg>
);

const UnderlineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
    <line x1="4" y1="21" x2="20" y2="21" />
  </svg>
);

const ListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const ListOrderedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="10" y1="6" x2="21" y2="6" />
    <line x1="10" y1="12" x2="21" y2="12" />
    <line x1="10" y1="18" x2="21" y2="18" />
    <path d="M4 6h1v4" />
    <path d="M4 10h2" />
    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
  </svg>
);

const AlignLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="15" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const AlignCenterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const AlignRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="9" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      hasLabel = true,
      infoContent,
      isOptional,
      errorMessage,
      captionMessage,
      size = 'medium',
      border,
      borderRadius,
      hasToolbar = false,
      maxLength,
      className,
      id,
      disabled,
      onChange,
      ...rest
    },
    ref
  ) => {
    const inputId = id || (label && typeof label === 'string' ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
    const hasError = !!errorMessage;
    const message = errorMessage || captionMessage;

    const [charCount, setCharCount] = useState(
      typeof rest.value === 'string' ? rest.value.length : 
      typeof rest.defaultValue === 'string' ? rest.defaultValue.length : 0
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <S.Container size={size} className={className} disabled={disabled}>
        {hasLabel && (label || isOptional) && (
          <S.LabelContainer>
            {label && <S.LabelText htmlFor={inputId}>{label}</S.LabelText>}
            {isOptional && <S.OptionalText>(Optional)</S.OptionalText>}
            {infoContent && (
              <S.InfoIconWrapper data-tooltip={infoContent}>
                <InfoIcon />
              </S.InfoIconWrapper>
            )}
          </S.LabelContainer>
        )}

        <S.InputWrapper hasError={hasError} disabled={disabled} customBorder={border} customBorderRadius={borderRadius}>
          {hasToolbar && size !== 'small' && (
            <S.ToolbarContainer>
              <S.ToolbarGroup>
                <S.ToolbarButton type="button" disabled={disabled}><TypeIcon /></S.ToolbarButton>
                <S.ToolbarButton type="button" disabled={disabled}><BoldIcon /></S.ToolbarButton>
                <S.ToolbarButton type="button" disabled={disabled}><ItalicIcon /></S.ToolbarButton>
                <S.ToolbarButton type="button" disabled={disabled}><UnderlineIcon /></S.ToolbarButton>
              </S.ToolbarGroup>
              <S.ToolbarDivider />
              <S.ToolbarGroup>
                <S.ToolbarButton type="button" disabled={disabled}><ListIcon /></S.ToolbarButton>
                <S.ToolbarButton type="button" disabled={disabled}><ListOrderedIcon /></S.ToolbarButton>
              </S.ToolbarGroup>
              <S.ToolbarDivider />
              <S.ToolbarGroup>
                <S.ToolbarButton type="button" disabled={disabled}><AlignLeftIcon /></S.ToolbarButton>
                <S.ToolbarButton type="button" disabled={disabled}><AlignCenterIcon /></S.ToolbarButton>
                <S.ToolbarButton type="button" disabled={disabled}><AlignRightIcon /></S.ToolbarButton>
              </S.ToolbarGroup>
            </S.ToolbarContainer>
          )}

          <S.StyledTextArea 
            ref={ref} 
            id={inputId} 
            disabled={disabled} 
            maxLength={maxLength}
            onChange={handleChange}
            {...rest} 
          />
          
          {maxLength !== undefined && (
            <S.CounterText>
              {charCount}/{maxLength}
            </S.CounterText>
          )}
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

TextArea.displayName = 'TextArea';
