import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { ToggleSize, ToggleVariant } from './Toggle.type';

export const HiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const getSwitchSize = (size: ToggleSize) => {
  switch (size) {
    case 'small': return { width: '32px', height: '16px', thumb: '12px', offset: '2px' };
    case 'large': return { width: '52px', height: '28px', thumb: '24px', offset: '2px' };
    case 'medium':
    default: return { width: '44px', height: '24px', thumb: '20px', offset: '2px' };
  }
};

export const SwitchTrack = styled.div<{ $size: ToggleSize; $checked: boolean; $disabled: boolean; $hasMultiline: boolean }>`
  position: relative;
  width: ${({ $size }) => getSwitchSize($size).width};
  height: ${({ $size }) => getSwitchSize($size).height};
  background-color: ${({ $checked, $disabled }) => {
    if ($disabled) return $checked ? '#bfdbfe' : '#f1f5f9';
    return $checked ? '#2563eb' : '#cbd5e1';
  }};
  border-radius: 9999px;
  transition: background-color 0.2s ease-in-out;
  flex-shrink: 0;
  margin-top: ${({ $hasMultiline, $size }) => {
    if (!$hasMultiline) return '0';
    // If there is multi-line content, we want to top-align the toggle with the first line of text.
    // Assuming text line-height is ~20px, we adjust based on the switch height.
    const h = parseInt(getSwitchSize($size).height);
    if (h < 20) return `${(20 - h) / 2}px`;
    return '0';
  }};
`;

export const SwitchThumb = styled.div<{ $size: ToggleSize; $checked: boolean; $disabled: boolean }>`
  position: absolute;
  top: ${({ $size }) => getSwitchSize($size).offset};
  left: ${({ $size }) => getSwitchSize($size).offset};
  width: ${({ $size }) => getSwitchSize($size).thumb};
  height: ${({ $size }) => getSwitchSize($size).thumb};
  background-color: ${({ $disabled, $checked }) => {
    if ($disabled && !$checked) return '#cbd5e1';
    return '#ffffff';
  }};
  border-radius: 50%;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
  transform: ${({ $size, $checked }) => {
    if (!$checked) return 'translateX(0)';
    const sizeConf = getSwitchSize($size);
    const trackWidth = parseInt(sizeConf.width);
    const thumbWidth = parseInt(sizeConf.thumb);
    const offset = parseInt(sizeConf.offset);
    const move = trackWidth - thumbWidth - (offset * 2);
    return `translateX(${move}px)`;
  }};
  box-shadow: ${({ $disabled }) => $disabled ? 'none' : '0px 2px 4px rgba(0, 0, 0, 0.1)'};
`;

export const Container = styled.label<{ $variant: ToggleVariant; $checked: boolean; $disabled: boolean; $hasMultiline: boolean }>`
  display: flex;
  align-items: ${({ $hasMultiline }) => $hasMultiline ? 'flex-start' : 'center'};
  gap: 12px;
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  ${({ $variant, $checked, $disabled }) => $variant === 'card' && css`
    padding: 16px;
    border: 1px solid ${$checked && !$disabled ? '#2563eb' : '#e2e8f0'};
    border-radius: 8px;
    background-color: #ffffff;
    transition: border-color 0.2s;
    
    &:hover {
      border-color: ${$disabled ? '#e2e8f0' : ($checked ? '#2563eb' : '#cbd5e1')};
    }
  `}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const LabelText = styled.span<{ $disabled?: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $disabled }) => $disabled ? '#cbd5e1' : '#0f172a'};
  transition: color 0.2s;
`;

export const SubLabelText = styled.span<{ $disabled?: boolean }>`
  font-size: 14px;
  color: ${({ $disabled }) => $disabled ? '#e2e8f0' : '#64748b'};
  transition: color 0.2s;
`;

export const DescriptionText = styled.div<{ $disabled?: boolean }>`
  font-size: 14px;
  color: ${({ $disabled }) => $disabled ? '#e2e8f0' : '#64748b'};
  transition: color 0.2s;
`;

export const LinkText = styled.a<{ $disabled?: boolean }>`
  font-size: 14px;
  color: ${({ $disabled }) => $disabled ? '#bfdbfe' : '#2563eb'};
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s;
  
  &:hover {
    color: ${({ $disabled }) => $disabled ? '#bfdbfe' : '#1d4ed8'};
  }
`;

export const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

export const LeftLabel = styled.span<{ $disabled?: boolean }>`
  font-size: 14px;
  color: ${({ $disabled }) => $disabled ? '#e2e8f0' : '#64748b'};
  margin-right: -4px;
  transition: color 0.2s;
`;

export const StyledBadge = styled.span<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  background-color: ${({ $disabled }) => $disabled ? '#f8fafc' : '#f1f5f9'};
  color: ${({ $disabled }) => $disabled ? '#cbd5e1' : '#64748b'};
  font-size: 12px;
  font-weight: 500;
  border-radius: 9999px;
  transition: all 0.2s;
`;
