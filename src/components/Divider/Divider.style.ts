import styled from '@emotion/styled';
import type { DividerThickness, DividerAlign, DividerVariant, DividerColor } from './Divider.type';

const getThickness = (thickness: DividerThickness) => {
  switch (thickness) {
    case 'thick': return '4px';
    case 'medium': return '2px';
    case 'thin':
    default: return '1px';
  }
};

export const Container = styled.div<{ variant: DividerVariant }>`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  ${({ variant }) => variant === 'block' ? `
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 10px 16px;
    border-radius: 6px;
  ` : ''}
`;

const getGradient = (color?: DividerColor) => {
  switch (color) {
    case 'blue':
      return 'linear-gradient(90deg, #93c5fd 0%, #1e3a8a 50%, #93c5fd 100%)';
    case 'red':
      return 'linear-gradient(90deg, #fca5a5 0%, #7f1d1d 50%, #fca5a5 100%)';
    case 'light':
      return 'linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #f8fafc 100%)';
    case 'gray':
    default:
      return 'linear-gradient(90deg, #cbd5e1 0%, #334155 50%, #cbd5e1 100%)';
  }
};

export const DecorativeLine = styled.div<{ color?: DividerColor; thickness: DividerThickness }>`
  width: 100%;
  height: ${({ thickness }) => getThickness(thickness)};
  background: ${({ color }) => getGradient(color)};
  -webkit-mask-image: linear-gradient(to right, black 95%, transparent 95%);
  -webkit-mask-size: 11.11% 100%;
  mask-image: linear-gradient(to right, black 95%, transparent 95%);
  mask-size: 11.11% 100%;
`;

export const Line = styled.div<{ thickness: DividerThickness }>`
  flex-grow: 1;
  height: ${({ thickness }) => getThickness(thickness)};
  background-color: #e2e8f0;
`;

export const Content = styled.div<{ align: DividerAlign; variant: DividerVariant }>`
  padding: ${({ variant, align }) => {
    if (variant === 'block') return '0';
    if (align === 'left') return '0 16px 0 0';
    if (align === 'right') return '0 0 0 16px';
    return '0 16px';
  }};
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
`;

export const RightContent = styled.div<{ variant: DividerVariant }>`
  padding-left: ${({ variant }) => variant === 'block' ? '0' : '16px'};
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

export const Spacer = styled.div`
  flex-grow: 1;
`;

export const StyledButton = styled.button`
  padding: 6px 12px;
  background-color: #f1f5f9;
  border: none;
  border-radius: 6px;
  color: #0f172a;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover { background-color: #e2e8f0; }
`;

export const StyledIconButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: #f1f5f9;
  border: none;
  border-radius: 50%;
  color: #0f172a;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover { background-color: #e2e8f0; }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
`;

export const StyledGroupButton = styled.button`
  padding: 6px 12px;
  background: #fff;
  border: none;
  border-right: 1px solid #e2e8f0;
  color: #475569;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  
  &:last-child {
    border-right: none;
  }
  
  &:hover { background-color: #f8fafc; }
`;
