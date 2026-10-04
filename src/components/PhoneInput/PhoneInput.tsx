import React, { forwardRef, useState, useRef, useEffect } from 'react';
import type { PhoneInputProps } from './PhoneInput.type';
import * as S from './PhoneInput.style';

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

const ChevronDown = () => (
  <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const USFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
    <mask id="circleMask">
      <circle cx="256" cy="256" r="256" fill="white" />
    </mask>
    <g mask="url(#circleMask)">
      <rect width="512" height="512" fill="#eeeeee" />
      <rect width="512" height="42.6" y="42.6" fill="#d80027" />
      <rect width="512" height="42.6" y="128" fill="#d80027" />
      <rect width="512" height="42.6" y="213.3" fill="#d80027" />
      <rect width="512" height="42.6" y="298.6" fill="#d80027" />
      <rect width="512" height="42.6" y="384" fill="#d80027" />
      <rect width="512" height="42.6" y="469.3" fill="#d80027" />
      <rect width="256" height="277.3" fill="#0052b4" />
      <g fill="#ffffff">
        <circle cx="42" cy="42" r="10" />
        <circle cx="128" cy="42" r="10" />
        <circle cx="214" cy="42" r="10" />
        <circle cx="85" cy="85" r="10" />
        <circle cx="171" cy="85" r="10" />
        <circle cx="42" cy="128" r="10" />
        <circle cx="128" cy="128" r="10" />
        <circle cx="214" cy="128" r="10" />
        <circle cx="85" cy="171" r="10" />
        <circle cx="171" cy="171" r="10" />
        <circle cx="42" cy="214" r="10" />
        <circle cx="128" cy="214" r="10" />
        <circle cx="214" cy="214" r="10" />
      </g>
    </g>
  </svg>
);

const FRFlag = () => (
  <svg width="20" height="20" viewBox="0 0 32 32">
    <mask id="frMask"><circle cx="16" cy="16" r="16" fill="white" /></mask>
    <g mask="url(#frMask)">
      <rect width="10.66" height="32" fill="#0055A4" />
      <rect x="10.66" width="10.66" height="32" fill="#FFFFFF" />
      <rect x="21.33" width="10.66" height="32" fill="#EF4135" />
    </g>
  </svg>
);

const DEFlag = () => (
  <svg width="20" height="20" viewBox="0 0 32 32">
    <mask id="deMask"><circle cx="16" cy="16" r="16" fill="white" /></mask>
    <g mask="url(#deMask)">
      <rect width="32" height="10.66" fill="#000000" />
      <rect y="10.66" width="32" height="10.66" fill="#DD0000" />
      <rect y="21.33" width="32" height="10.66" fill="#FFCE00" />
    </g>
  </svg>
);

const COUNTRIES = [
  { id: 'US', code: '+1', flag: <USFlag /> },
  { id: 'FR', code: '+33', flag: <FRFlag /> },
  { id: 'DE', code: '+49', flag: <DEFlag /> },
];

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
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
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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

        <S.InputWrapper size={size} hasError={hasError} disabled={disabled} customBorder={border} customBorderRadius={borderRadius}>
          <S.CountrySelectorWrapper ref={dropdownRef}>
            <S.CountrySelector 
              disabled={disabled}
              onClick={() => !disabled && setIsOpen(!isOpen)}
            >
              {selectedCountry.flag}
              <span>{selectedCountry.code}</span>
              <ChevronDown />
            </S.CountrySelector>
            
            {isOpen && (
              <S.DropdownMenu>
                {COUNTRIES.map(country => (
                  <S.DropdownItem 
                    key={country.id}
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsOpen(false);
                    }}
                  >
                    {country.flag}
                    <span>{country.code}</span>
                  </S.DropdownItem>
                ))}
              </S.DropdownMenu>
            )}
          </S.CountrySelectorWrapper>
          
          <S.MiddleSection>
            <S.StyledInput ref={ref} id={inputId} disabled={disabled} {...rest} />
          </S.MiddleSection>
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

PhoneInput.displayName = 'PhoneInput';
