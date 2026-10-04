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
  background-color: ${({ disabled }) => (disabled ? '#f1f5f9' : '#ffffff')};
  height: ${({ size }) => (size === 'small' ? '36px' : size === 'large' ? '52px' : '44px')};
  transition: all 0.2s ease;
  overflow: hidden;
  
  ${({ disabled, hasError }) => !disabled && `
    &:hover {
      border-color: ${hasError ? '#ef4444' : '#94a3b8'};
    }
    &:focus-within {
      border-color: ${hasError ? '#ef4444' : '#8b5cf6'};
      box-shadow: 0 0 0 1px ${hasError ? '#ef4444' : '#8b5cf6'};
    }
  `}
`;

export const CountrySelectorWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  border-right: 1px solid #cbd5e1;
`;

export const CountrySelector = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  height: 100%;
  background-color: transparent;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  color: #475569;
  font-weight: 500;

  svg.chevron {
    width: 16px;
    height: 16px;
    color: #94a3b8;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  margin: 0;
  padding: 8px 0;
  list-style: none;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  z-index: 10;
  width: 140px;
  max-height: 200px;
  overflow-y: auto;
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #1e293b;
  font-weight: 500;

  &:hover {
    background-color: #f1f5f9;
  }
`;

export const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 0 12px;
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
