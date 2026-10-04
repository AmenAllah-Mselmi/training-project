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

export const StyledInput = styled.input<{ $variant?: 'stepper' | 'stacked' | 'inline' }>`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #1e293b;
  background: transparent;
  height: 100%;
  width: 100%;
  padding: ${({ $variant }) => ($variant === 'stepper' ? '0' : '0 4px 0 12px')};
  text-align: ${({ $variant }) => ($variant === 'stepper' ? 'center' : 'left')};

  &::placeholder {
    color: #94a3b8;
  }
  
  &:disabled {
    cursor: not-allowed;
  }

  /* Hide arrows */
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 8px;
  color: #94a3b8;
`;

export const SpinnerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: inherit;
  
  &:hover:not(:disabled) {
    color: #64748b;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const SplitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: #f1f5f9;
  border: none;
  border-radius: 6px;
  color: #64748b;
  cursor: pointer;
  margin: 0 8px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: #e2e8f0;
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

export const InlineButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 4px;
`;

export const InlineButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  background: transparent;
  border: none;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    color: #0f172a;
    background-color: #f8fafc;
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

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background-color: #e2e8f0;
  margin: 0 2px;
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
