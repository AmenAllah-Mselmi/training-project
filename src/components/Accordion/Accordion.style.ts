import styled from '@emotion/styled';
import type { AccordionVariant, AccordionTheme } from './Accordion.type';

const getBackgroundColor = (variant: AccordionVariant, theme: AccordionTheme) => {
  if (theme === 'dark') {
    return variant === 'filled' ? '#475569' : variant === 'outline' ? 'transparent' : 'transparent';
  }
  return variant === 'filled' ? '#f1f5f9' : '#ffffff';
};

const getBorderStyles = (variant: AccordionVariant, theme: AccordionTheme) => {
  const borderColor = theme === 'dark' ? '#64748b' : '#e2e8f0';
  
  if (variant === 'minimal') {
    return `border-bottom: 1px solid ${borderColor}; border-radius: 0;`;
  }
  if (variant === 'outline') {
    return `border: 1px solid ${borderColor}; border-radius: 8px;`;
  }
  return `border: 1px solid transparent; border-radius: 8px;`; // filled
};

const getTextColor = (theme: AccordionTheme) => {
  return theme === 'dark' ? '#f8fafc' : '#1e293b';
};

const getMutedTextColor = (theme: AccordionTheme) => {
  return theme === 'dark' ? '#cbd5e1' : '#64748b';
};

export const AccordionContainer = styled.div<{ $variant: AccordionVariant; $theme: AccordionTheme }>`
  width: 100%;
  max-width: 600px;
  background-color: ${({ $variant, $theme }) => getBackgroundColor($variant, $theme)};
  ${({ $variant, $theme }) => getBorderStyles($variant, $theme)}
  color: ${({ $theme }) => getTextColor($theme)};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const AccordionHeader = styled.div<{ $isOpen: boolean; $variant: AccordionVariant }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $variant }) => ($variant === 'minimal' ? '16px 0' : '16px')};
  cursor: pointer;
  user-select: none;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LeftIconWrapper = styled.div<{ $theme: AccordionTheme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $theme }) => ($theme === 'dark' ? '#94a3b8' : '#3b82f6')};
  font-weight: 600;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 500;
`;

export const ChevronWrapper = styled.div<{ $isOpen: boolean; $theme: AccordionTheme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${({ $theme }) => ($theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#f8fafc')};
  border: 1px solid ${({ $theme }) => ($theme === 'dark' ? 'rgba(255,255,255,0.1)' : '#f1f5f9')};
  color: ${({ $theme }) => ($theme === 'dark' ? '#94a3b8' : '#94a3b8')};
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const AccordionContent = styled.div<{ $isOpen: boolean; $variant: AccordionVariant }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out;
  padding: ${({ $isOpen, $variant }) => {
    if (!$isOpen) return '0';
    return $variant === 'minimal' ? '0 0 24px 32px' : '0 16px 20px 48px';
  }};
`;

export const ContentText = styled.p<{ $theme: AccordionTheme }>`
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ $theme }) => getMutedTextColor($theme)};
`;

export const ReadMoreLink = styled.button<{ $theme: AccordionTheme }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $theme }) => ($theme === 'dark' ? '#f8fafc' : '#3b82f6')};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;
