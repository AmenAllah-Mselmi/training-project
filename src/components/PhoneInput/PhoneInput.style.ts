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
  background-color: ${({ disabled }) => (disabled ? '#f1f5f9' : '#ffffff')};
  height: ${({ height }) => (height ? (typeof height === 'number' ? `${height}px` : height) : '44px')};
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
