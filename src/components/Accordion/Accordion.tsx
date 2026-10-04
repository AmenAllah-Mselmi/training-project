import React, { forwardRef, useState } from 'react';
import type { AccordionProps } from './Accordion.type';
import * as S from './Accordion.style';

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PlusCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      title = 'According Title',
      content = 'Placeholder for accordion text.',
      leftIcon,
      variant = 'minimal',
      theme = 'light',
      isOpen: controlledIsOpen,
      hasReadMore = true,
      onReadMoreClick,
      ...rest
    },
    ref
  ) => {
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
    
    // If isOpen prop is provided, use it (controlled mode), otherwise use internal state
    const isActuallyOpen = controlledIsOpen !== undefined ? controlledIsOpen : uncontrolledIsOpen;

    const toggleAccordion = () => {
      if (controlledIsOpen === undefined) {
        setUncontrolledIsOpen((prev) => !prev);
      }
    };
    
    // Render default icon if none provided
    const renderLeftIcon = () => {
      if (leftIcon) return leftIcon;
      if (variant === 'minimal') return '0...';
      return <PlusCircleIcon />;
    };

    return (
      <S.AccordionContainer ref={ref} $variant={variant} $theme={theme} {...rest}>
        <S.AccordionHeader onClick={toggleAccordion} $isOpen={isActuallyOpen} $variant={variant}>
          <S.HeaderLeft>
            <S.LeftIconWrapper $theme={theme}>
              {renderLeftIcon()}
            </S.LeftIconWrapper>
            <S.Title>{title}</S.Title>
          </S.HeaderLeft>
          
          <S.ChevronWrapper $isOpen={isActuallyOpen} $theme={theme}>
            <ChevronDownIcon />
          </S.ChevronWrapper>
        </S.AccordionHeader>
        
        <S.AccordionContent $isOpen={isActuallyOpen} $variant={variant}>
          <S.ContentText $theme={theme}>
            {content}
          </S.ContentText>
          
          {hasReadMore && (
            <S.ReadMoreLink onClick={onReadMoreClick} $theme={theme}>
              Read more <ArrowRightIcon />
            </S.ReadMoreLink>
          )}
        </S.AccordionContent>
      </S.AccordionContainer>
    );
  }
);

Accordion.displayName = 'Accordion';
