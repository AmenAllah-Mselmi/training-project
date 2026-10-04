import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { ListItemSize } from './ListItem.type';

export const Container = styled.div<{ size: ListItemSize; interactive: boolean; disabled: boolean }>`
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
  
  ${({ size }) => {
    switch (size) {
      case 'small': return css`padding: 8px 12px; gap: 12px;`;
      case 'large': return css`padding: 16px 20px; gap: 16px;`;
      case 'medium':
      default: return css`padding: 12px 16px; gap: 12px;`;
    }
  }}

  ${({ interactive, disabled }) => {
    if (disabled) return css`
      opacity: 0.5;
      pointer-events: none;
    `;
    
    if (interactive) return css`
      cursor: pointer;
      border-radius: 8px;
      transition: background-color 0.2s ease;
      &:hover {
        background-color: #f8fafc;
      }
      &:active {
        background-color: #f1f5f9;
      }
    `;
    return '';
  }}
`;

export const LeftSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const RightSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  justify-content: center;
`;

export const Title = styled.div<{ size: ListItemSize }>`
  font-weight: 500;
  color: #0f172a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  ${({ size }) => {
    switch (size) {
      case 'small': return css`font-size: 14px; line-height: 20px;`;
      case 'large': return css`font-size: 16px; line-height: 24px;`;
      case 'medium':
      default: return css`font-size: 15px; line-height: 22px;`;
    }
  }}
`;

export const Description = styled.div<{ size: ListItemSize }>`
  color: #64748b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ size }) => {
    switch (size) {
      case 'small': return css`font-size: 12px; line-height: 16px; margin-top: 2px;`;
      case 'large': return css`font-size: 14px; line-height: 20px; margin-top: 4px;`;
      case 'medium':
      default: return css`font-size: 13px; line-height: 18px; margin-top: 2px;`;
    }
  }}
`;
