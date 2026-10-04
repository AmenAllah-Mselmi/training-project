import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { BadgeVariant, BadgeColor, BadgeSize, BadgeRadius } from './Badge.type';

const getColors = (variant: BadgeVariant, color: BadgeColor) => {
  const colors = {
    primary: { main: '#3b82f6', soft: '#eff6ff', text: '#ffffff', outlineText: '#3b82f6', border: '#bfdbfe' },
    success: { main: '#22c55e', soft: '#f0fdf4', text: '#ffffff', outlineText: '#22c55e', border: '#bbf7d0' },
    warning: { main: '#f59e0b', soft: '#fffbeb', text: '#ffffff', outlineText: '#f59e0b', border: '#fde68a' },
    danger:  { main: '#ef4444', soft: '#fef2f2', text: '#ffffff', outlineText: '#ef4444', border: '#fecaca' },
    neutral: { main: '#64748b', soft: '#f8fafc', text: '#ffffff', outlineText: '#64748b', border: '#e2e8f0' },
    purple:  { main: '#a855f7', soft: '#faf5ff', text: '#ffffff', outlineText: '#a855f7', border: '#e9d5ff' },
    pink:    { main: '#ec4899', soft: '#fdf2f8', text: '#ffffff', outlineText: '#ec4899', border: '#fbcfe8' },
  };
  
  const c = colors[color] || colors.primary;

  switch (variant) {
    case 'solid':
      return css`
        background-color: ${c.main};
        color: ${c.text};
        border: 1px solid ${c.main};
      `;
    case 'soft':
      return css`
        background-color: ${c.soft};
        color: ${c.main};
        border: 1px solid transparent;
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${c.outlineText};
        border: 1px solid ${c.border};
      `;
  }
};

const getSize = (size: BadgeSize, iconOnly: boolean) => {
  if (iconOnly) {
    switch (size) {
      case 'small': return css`width: 20px; height: 20px; padding: 0; font-size: 11px;`;
      case 'large': return css`width: 28px; height: 28px; padding: 0; font-size: 14px;`;
      case 'medium':
      default: return css`width: 24px; height: 24px; padding: 0; font-size: 13px;`;
    }
  }

  switch (size) {
    case 'small': return css`padding: 2px 8px; font-size: 12px; height: 20px;`;
    case 'large': return css`padding: 6px 16px; font-size: 15px; height: 32px;`;
    case 'medium':
    default: return css`padding: 4px 10px; font-size: 13px; height: 24px;`;
  }
};

const getRadius = (radius: BadgeRadius) => {
  switch (radius) {
    case 'small': return '4px';
    case 'medium': return '6px';
    case 'full': return '9999px';
    default: return '9999px';
  }
};

export const StyledBadge = styled.span<{
  variant: BadgeVariant;
  color: BadgeColor;
  size: BadgeSize;
  borderRadius: BadgeRadius;
  iconOnly: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  box-sizing: border-box;
  white-space: nowrap;

  ${({ variant, color }) => getColors(variant, color)}
  ${({ size, iconOnly }) => getSize(size, iconOnly)}
  border-radius: ${({ borderRadius }) => getRadius(borderRadius)};

  svg {
    flex-shrink: 0;
    width: 1em;
    height: 1em;
  }
`;

export const Dot = styled.span<{ variant: BadgeVariant; color: BadgeColor }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ variant, color }) => {
    if (variant === 'solid') return '#ffffff';
    
    const colors = {
      primary: '#3b82f6',
      success: '#22c55e',
      warning: '#f59e0b',
      danger: '#ef4444',
      neutral: '#64748b',
      purple: '#a855f7',
      pink: '#ec4899',
    };
    return colors[color] || colors.primary;
  }};
`;
