import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { AvatarSize } from './Avatar.type';

const getSize = (size: AvatarSize) => {
  switch (size) {
    case 'xs': return 24;
    case 'sm': return 32;
    case 'md': return 40;
    case 'lg': return 48;
    case 'xl': return 56;
    case '2xl': return 72;
    case '3xl': return 96;
    default: return 40;
  }
};

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

export const AvatarImage = styled.div<{ size: AvatarSize; bgColor?: string; $isGroupItem?: boolean }>`
  width: ${({ size }) => getSize(size)}px;
  height: ${({ size }) => getSize(size)}px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor || '#e2e8f0'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  font-weight: 600;
  font-size: ${({ size }) => Math.max(10, getSize(size) * 0.4)}px;
  flex-shrink: 0;

  ${({ $isGroupItem }) => $isGroupItem && css`
    border: 2px solid #ffffff;
    margin-right: -10px;
    &:last-of-type {
      margin-right: 0;
    }
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  color: #0f172a;
  font-weight: 600;
  font-size: 15px;
`;

export const Subtitle = styled.div`
  color: #64748b;
  font-size: 14px;
  margin-top: 2px;
`;

export const AddButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid #94a3b8;
  background: transparent;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;

  &:hover {
    background: #f1f5f9;
    color: #475569;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const GroupWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
  padding: 4px 12px 4px 4px;
  gap: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;

export const AvatarsOverlap = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export const RemainingCount = styled.span`
  font-weight: 600;
  color: #475569;
  font-size: 15px;
`;
