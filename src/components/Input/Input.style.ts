import styled from '@emotion/styled';

export const Container = styled.div<{ disabled?: boolean; size?: 'small' | 'medium' | 'large' }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ size }) => (size === 'small' ? '240px' : size === 'large' ? '400px' : '320px')};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LabelText = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
`;

export const OptionalText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #6b7280;
`;

export const InfoIconWrapper = styled.div<{ 'data-tooltip'?: string }>`
  display: flex;
  align-items: center;
  color: #9ca3af;
  position: relative;
  cursor: help;
  
  svg {
    width: 14px;
    height: 14px;
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 6px;
    padding: 6px 10px;
    background-color: #1e293b;
    color: white;
    font-size: 12px;
    font-weight: 500;
    border-radius: 6px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    pointer-events: none;
    z-index: 10;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 2px;
    border-width: 4px;
    border-style: solid;
    border-color: #1e293b transparent transparent transparent;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    pointer-events: none;
    z-index: 10;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
`;

export const InputWrapper = styled.div<{ size?: 'small' | 'medium' | 'large'; hasError?: boolean; disabled?: boolean; customBorder?: string; customBorderRadius?: string | number }>`
  display: flex;
  align-items: center;
  border: ${({ hasError, customBorder }) => customBorder ? customBorder : (hasError ? '1px solid #ef4444' : '1px solid #cbd5e1')};
  border-radius: ${({ customBorderRadius }) => (customBorderRadius ? (typeof customBorderRadius === 'number' ? `${customBorderRadius}px` : customBorderRadius) : '8px')};
  background-color: ${({ disabled }) => (disabled ? '#f8fafc' : '#ffffff')};
  height: ${({ size }) => (size === 'small' ? '36px' : size === 'large' ? '52px' : '44px')};
  transition: all 0.2s ease;
  overflow: hidden;
  
  ${({ disabled, hasError }) => !disabled && `
    &:focus-within {
      border-color: ${hasError ? '#ef4444' : '#8b5cf6'};
      box-shadow: 0 0 0 1px ${hasError ? '#ef4444' : '#8b5cf6'};
    }
  `}
`;

export const PrefixWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 100%;
  color: #64748b;
  font-size: 14px;
  border-right: 1px solid #cbd5e1;
  background-color: transparent;
`;

export const SuffixWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 100%;
  color: #64748b;
  font-size: 14px;
  border-left: 1px solid #cbd5e1;
  background-color: transparent;
`;

export const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 0 12px;
`;

export const StartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  margin-right: 8px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const EndIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #1e293b;
  background: transparent;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: #94a3b8;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

export const BottomMessage = styled.div<{ isError?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${({ isError }) => (isError ? '#ef4444' : '#64748b')};
  
  svg {
    width: 14px;
    height: 14px;
  }
`;
