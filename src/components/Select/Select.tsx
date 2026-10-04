import React, { forwardRef, useState } from 'react';
import type { SelectProps, SelectOption } from './Select.type';
import * as S from './Select.style';

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

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      hasLabel = true,
      infoContent,
      isOptional,
      errorMessage,
      captionMessage,
      size = 'medium',
      startIcon,
      isMulti = false,
      value = '',
      options = [],
      showSearch = false,
      searchPlaceholder = 'Search',
      placeholder = 'Select Options',
      isTagInput = false,
      tags = [],
      isOpen = false, // Prop for storybook previewing
      disabled,
      className,
      id,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const selectId = id || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
    const hasError = !!errorMessage;
    const message = errorMessage || captionMessage;
    
    // For storybook testing, respect the isOpen prop if it's explicitly passed
    const isDropdownOpen = isOpen || internalOpen;

    const handleToggle = () => {
      if (!disabled) {
        setInternalOpen(!internalOpen);
      }
    };

    // Derived states
    const selectedArray = Array.isArray(value) ? value : (value ? [value] : []);
    const selectedCount = selectedArray.length;
    const hasValue = isTagInput ? tags.length > 0 : selectedCount > 0;
    
    let displayValue = placeholder;
    if (!isMulti && selectedCount === 1 && !isTagInput) {
      const selectedOpt = options.find(o => o.value === selectedArray[0]);
      if (selectedOpt) displayValue = selectedOpt.label;
    }

    return (
      <S.Container size={size} className={className} disabled={disabled} ref={ref} {...rest}>
        {hasLabel && (label || isOptional) && (
          <S.LabelContainer>
            {label && <S.LabelText htmlFor={selectId}>{label}</S.LabelText>}
            {isOptional && <S.OptionalText>(Optional)</S.OptionalText>}
            {infoContent && (
              <S.InfoIconWrapper title={infoContent}>
                <InfoIcon />
              </S.InfoIconWrapper>
            )}
          </S.LabelContainer>
        )}

        <S.SelectBox 
          size={size} 
          hasError={hasError} 
          disabled={disabled} 
          isOpen={isDropdownOpen}
          onClick={handleToggle}
        >
          <S.SelectContent>
            {startIcon && !isTagInput && <S.IconWrapper>{startIcon}</S.IconWrapper>}
            
            {isTagInput ? (
              <S.TagContainer>
                {tags.map((tag, idx) => (
                  <S.TagPill key={idx}>
                    {tag}
                    <S.TagClose><CloseIcon /></S.TagClose>
                  </S.TagPill>
                ))}
                <S.TagInlineInput placeholder={tags.length === 0 ? placeholder : ''} onClick={e => e.stopPropagation()} />
              </S.TagContainer>
            ) : (
              <S.ValueText hasValue={hasValue}>{displayValue}</S.ValueText>
            )}
          </S.SelectContent>

          <S.RightActions>
            {isMulti && selectedCount > 0 && !isTagInput && (
              <S.Badge>+{selectedCount} Selected</S.Badge>
            )}
            <S.Chevron isOpen={isDropdownOpen}>
              {!isTagInput || (isTagInput && hasError) ? <ChevronDownIcon /> : (
                infoContent && <InfoIcon />
              )}
            </S.Chevron>
          </S.RightActions>
        </S.SelectBox>

        {isDropdownOpen && !isTagInput && (
          <S.DropdownMenu onClick={e => e.stopPropagation()}>
            {showSearch && (
              <S.SearchWrapper>
                <S.SearchInputContainer>
                  <SearchIcon />
                  <S.SearchInput placeholder={searchPlaceholder} />
                </S.SearchInputContainer>
              </S.SearchWrapper>
            )}
            <S.OptionsList>
              {options.map((opt) => {
                const isSelected = selectedArray.includes(opt.value);
                return (
                  <S.OptionItem key={opt.value} isSelected={!isMulti && isSelected}>
                    {isMulti ? (
                      <>
                        <S.OptionCheckbox isChecked={isSelected}>
                          {isSelected && <CheckIcon />}
                        </S.OptionCheckbox>
                        {opt.icon && <S.IconWrapper>{opt.icon}</S.IconWrapper>}
                        <S.OptionLabel>{opt.label}</S.OptionLabel>
                      </>
                    ) : (
                      <>
                        {opt.icon && <S.IconWrapper>{opt.icon}</S.IconWrapper>}
                        <S.OptionLabel>{opt.label}</S.OptionLabel>
                        {isSelected && <S.IconWrapper style={{ color: '#3b82f6' }}><CheckIcon /></S.IconWrapper>}
                      </>
                    )}
                  </S.OptionItem>
                );
              })}
            </S.OptionsList>
          </S.DropdownMenu>
        )}

        {message && (
          <S.BottomMessage isError={hasError}>
            {hasError ? <ErrorIcon /> : null}
            <span>{message}</span>
          </S.BottomMessage>
        )}
      </S.Container>
    );
  }
);

Select.displayName = 'Select';
