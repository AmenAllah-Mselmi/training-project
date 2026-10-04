import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import type { ButtonVariant, ButtonColor, ButtonSize, ButtonRadius } from './Button.type';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const LoadingIcon = styled.svg`
  animation: ${spin} 1s linear infinite;
  width: 1.2em;
  height: 1.2em;
`;

const getColors = (variant: ButtonVariant, color: ButtonColor) => {
  const colors = {
    primary: { main: '#2563eb', hover: '#1d4ed8', soft: '#eff6ff', softHover: '#dbeafe', text: '#ffffff' },
    neutral: { main: '#0f172a', hover: '#020617', soft: '#f1f5f9', softHover: '#e2e8f0', text: '#ffffff' },
    danger: { main: '#ef4444', hover: '#dc2626', soft: '#fef2f2', softHover: '#fee2e2', text: '#ffffff' },
  };
  
  const c = colors[color] || colors.primary;

  switch (variant) {
    case 'solid':
      return css`
        background-color: ${c.main};
        color: ${c.text};
        border: 1px solid ${c.main};
        &:hover:not(:disabled) { background-color: ${c.hover}; border-color: ${c.hover}; }
      `;
    case 'soft':
      return css`
        background-color: ${c.soft};
        color: ${c.main};
        border: 1px solid transparent;
        &:hover:not(:disabled) { background-color: ${c.softHover}; }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${c.main};
        border: 1px solid ${c.softHover};
        &:hover:not(:disabled) { background-color: ${c.soft}; border-color: ${c.main}; }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${c.main};
        border: 1px solid transparent;
        &:hover:not(:disabled) { background-color: ${c.soft}; }
      `;
  }
};

const getSize = (size: ButtonSize, iconOnly: boolean) => {
  if (iconOnly) {
    switch (size) {
      case 'small': return css`width: 32px; height: 32px; padding: 0; font-size: 16px;`;
      case 'large': return css`width: 48px; height: 48px; padding: 0; font-size: 24px;`;
      case 'medium':
      default: return css`width: 40px; height: 40px; padding: 0; font-size: 20px;`;
    }
  }

  switch (size) {
    case 'small': return css`padding: 6px 12px; font-size: 12px; height: 32px;`;
    case 'large': return css`padding: 12px 24px; font-size: 16px; height: 48px;`;
    case 'medium':
    default: return css`padding: 8px 16px; font-size: 14px; height: 40px;`;
  }
};

const getRadius = (radius: ButtonRadius) => {
  switch (radius) {
    case 'none': return '0px';
    case 'small': return '6px';
    case 'full': return '9999px';
    case 'medium':
    default: return '8px';
  }
};

export const StyledButton = styled.button<{
  variant: ButtonVariant;
  color: ButtonColor;
  size: ButtonSize;
  borderRadius: ButtonRadius;
  iconOnly: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  ${({ variant, color }) => getColors(variant, color)}
  ${({ size, iconOnly }) => getSize(size, iconOnly)}
  border-radius: ${({ borderRadius }) => getRadius(borderRadius)};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    flex-shrink: 0;
    width: 1.2em;
    height: 1.2em;
  }
`;
