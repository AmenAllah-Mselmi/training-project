import React, { forwardRef, useRef } from 'react';
import type { CounterProps } from './Counter.type';
import * as S from './Counter.style';

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

const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const Counter = forwardRef<HTMLInputElement, CounterProps>(
  (
    {
      label,
      hasLabel = true,
      isOptional,
      errorMessage,
      captionMessage,
      size = 'medium',
      variant = 'stepper',
      border,
      borderRadius,
      onIncrement,
      onDecrement,
      className,
      id,
      disabled,
      type = 'number',
      ...rest
    },
    ref
  ) => {
    const inputId = id || (label && typeof label === 'string' ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
    const hasError = !!errorMessage;
    const message = errorMessage || captionMessage;

    // Use internal ref to call native stepUp/stepDown if custom handlers aren't provided
    const internalRef = useRef<HTMLInputElement | null>(null);

    const setRefs = (element: HTMLInputElement | null) => {
      internalRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    const handleDecrement = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onDecrement) {
        onDecrement();
      } else if (internalRef.current) {
        internalRef.current.stepDown();
        const event = new Event('change', { bubbles: true });
        internalRef.current.dispatchEvent(event);
      }
    };

    const handleIncrement = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onIncrement) {
        onIncrement();
      } else if (internalRef.current) {
        internalRef.current.stepUp();
        const event = new Event('change', { bubbles: true });
        internalRef.current.dispatchEvent(event);
      }
    };

    return (
      <S.Container size={size} className={className} disabled={disabled}>
        {hasLabel && (label || isOptional) && (
          <S.LabelContainer>
            {label && <S.LabelText htmlFor={inputId}>{label}</S.LabelText>}
          </S.LabelContainer>
        )}

        <S.InputWrapper size={size} hasError={hasError} disabled={disabled} customBorder={border} customBorderRadius={borderRadius}>
          {variant === 'stepper' && (
            <S.SplitButton type="button" onClick={handleDecrement} disabled={disabled} aria-label="Decrease">
              <MinusIcon />
            </S.SplitButton>
          )}

          <S.StyledInput 
            ref={setRefs} 
            id={inputId} 
            type={type}
            disabled={disabled}
            $variant={variant}
            {...rest} 
          />

          {variant === 'stacked' && (
            <S.SpinnerContainer>
              <S.SpinnerButton type="button" onClick={handleIncrement} disabled={disabled} aria-label="Increase">
                <ChevronUpIcon />
              </S.SpinnerButton>
              <S.SpinnerButton type="button" onClick={handleDecrement} disabled={disabled} aria-label="Decrease">
                <ChevronDownIcon />
              </S.SpinnerButton>
            </S.SpinnerContainer>
          )}

          {variant === 'stepper' && (
            <S.SplitButton type="button" onClick={handleIncrement} disabled={disabled} aria-label="Increase">
              <PlusIcon />
            </S.SplitButton>
          )}

          {variant === 'inline' && (
            <S.InlineButtonsContainer>
              <S.InlineButton type="button" onClick={handleDecrement} disabled={disabled} aria-label="Decrease">
                <MinusIcon />
              </S.InlineButton>
              <S.Divider />
              <S.InlineButton type="button" onClick={handleIncrement} disabled={disabled} aria-label="Increase">
                <PlusIcon />
              </S.InlineButton>
            </S.InlineButtonsContainer>
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

Counter.displayName = 'Counter';
