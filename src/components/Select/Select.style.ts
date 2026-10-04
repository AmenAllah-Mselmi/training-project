import styled from '@emotion/styled';

export const Container = styled.div<{ disabled?: boolean; size?: 'small' | 'medium' | 'large' }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ size }) => (size === 'small' ? '240px' : size === 'large' ? '400px' : '320px')};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  position: relative;
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
  cursor: help;
  svg { width: 14px; height: 14px; }
`;

export const SelectBox = styled.div<{ size?: 'small' | 'medium' | 'large'; hasError?: boolean; disabled?: boolean; isOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ hasError }) => (hasError ? '1px solid #ef4444' : '1px solid #cbd5e1')};
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? '#f8fafc' : '#ffffff')};
  min-height: ${({ size }) => (size === 'small' ? '36px' : size === 'large' ? '52px' : '44px')};
  padding: 4px 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  
  ${({ disabled, hasError, isOpen }) => !disabled && isOpen && `
    border-color: ${hasError ? '#ef4444' : '#8b5cf6'};
    box-shadow: 0 0 0 2px ${hasError ? 'rgba(239,68,68,0.2)' : 'rgba(139,92,246,0.2)'};
  `}
`;

export const SelectContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
  overflow: hidden;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  svg { width: 20px; height: 20px; }
`;

export const ValueText = styled.span<{ hasValue: boolean }>`
  font-size: 14px;
  color: ${({ hasValue }) => (hasValue ? '#1e293b' : '#94a3b8')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Badge = styled.div`
  background-color: #f1f5f9;
  color: #475569;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 4px;
`;

export const Chevron = styled.div<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  color: #94a3b8;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease;
  svg { width: 16px; height: 16px; }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  z-index: 50;
  max-height: 250px;
  display: flex;
  flex-direction: column;
`;

export const SearchWrapper = styled.div`
  padding: 8px;
  border-bottom: 1px solid #f1f5f9;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 6px;
  border: none;
  color: #64748b;
  svg { width: 16px; height: 16px; }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  &::placeholder { color: #94a3b8; }
`;

export const OptionsList = styled.div`
  overflow-y: auto;
  padding: 4px;
`;

export const OptionItem = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#f8fafc' : 'transparent')};
  
  &:hover {
    background-color: #f1f5f9;
  }
`;

export const OptionCheckbox = styled.div<{ isChecked?: boolean }>`
  width: 16px;
  height: 16px;
  border: 1px solid ${({ isChecked }) => (isChecked ? '#3b82f6' : '#cbd5e1')};
  border-radius: 4px;
  background-color: ${({ isChecked }) => (isChecked ? '#3b82f6' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  svg { width: 12px; height: 12px; }
`;

export const OptionLabel = styled.span`
  font-size: 14px;
  color: #1e293b;
  flex: 1;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 2px 0;
`;

export const TagPill = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #f1f5f9;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 13px;
  color: #475569;
`;

export const TagClose = styled.span`
  cursor: pointer;
  color: #94a3b8;
  display: flex;
  align-items: center;
  &:hover { color: #475569; }
  svg { width: 12px; height: 12px; }
`;

export const TagInlineInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  min-width: 60px;
  flex: 1;
`;

export const BottomMessage = styled.div<{ isError?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${({ isError }) => (isError ? '#ef4444' : '#64748b')};
  svg { width: 14px; height: 14px; }
`;
