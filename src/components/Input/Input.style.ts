import styled from '@emotion/styled';

export const Container = styled.div<{ width?: string | number; disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ width }) => (width ? (typeof width === 'number' ? `${width}px` : width) : '100%')};
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

export const InfoIconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #9ca3af;
  svg {
    width: 14px;
    height: 14px;
  }
`;

export const InputWrapper = styled.div<{ height?: string | number; hasError?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ hasError }) => (hasError ? '#ef4444' : '#cbd5e1')};
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? '#f8fafc' : '#ffffff')};
  height: ${({ height }) => (height ? (typeof height === 'number' ? `${height}px` : height) : '44px')};
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
