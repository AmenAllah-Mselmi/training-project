import styled from '@emotion/styled';

export const Container = styled.div<{ disabled?: boolean; size?: 'small' | 'medium' | 'large' }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ size }) => (size === 'small' ? '320px' : size === 'large' ? '600px' : '480px')};
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

export const InputWrapper = styled.div<{ hasError?: boolean; disabled?: boolean; customBorder?: string; customBorderRadius?: string | number }>`
  display: flex;
  flex-direction: column;
  border: ${({ hasError, customBorder }) => customBorder ? customBorder : (hasError ? '1px solid #ef4444' : '1px solid #cbd5e1')};
  border-radius: ${({ customBorderRadius }) => (customBorderRadius ? (typeof customBorderRadius === 'number' ? `${customBorderRadius}px` : customBorderRadius) : '8px')};
  background-color: ${({ disabled }) => (disabled ? '#f8fafc' : '#ffffff')};
  transition: all 0.2s ease;
  position: relative;
  
  ${({ disabled, hasError }) => !disabled && `
    &:focus-within {
      border-color: ${hasError ? '#ef4444' : '#8b5cf6'};
      box-shadow: 0 0 0 1px ${hasError ? '#ef4444' : '#8b5cf6'};
    }
  `}
`;

export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #cbd5e1;
  gap: 16px;
  background-color: #ffffff;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export const ToolbarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const ToolbarDivider = styled.div`
  width: 1px;
  height: 16px;
  background-color: #e2e8f0;
  margin: 0 4px;
`;

export const ToolbarButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  background-color: ${({ isActive }) => (isActive ? '#f1f5f9' : 'transparent')};
  border-radius: 4px;
  color: ${({ isActive }) => (isActive ? '#3b82f6' : '#64748b')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: #f1f5f9;
    color: #0f172a;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const StyledTextArea = styled.textarea`
  border: none;
  outline: none;
  font-size: 14px;
  color: #1e293b;
  background: transparent;
  width: 100%;
  min-height: 100px;
  padding: 12px;
  padding-bottom: 32px;
  resize: vertical;
  font-family: inherit;

  &::placeholder {
    color: #94a3b8;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

export const CounterText = styled.div`
  position: absolute;
  bottom: 8px;
  right: 20px;
  font-size: 11px;
  font-weight: 500;
  color: #94a3b8;
  pointer-events: none;
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
