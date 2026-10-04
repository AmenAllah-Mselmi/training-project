import styled from '@emotion/styled';
import type { DialogLayout, DialogTheme, DialogSize } from './Dialog.type';

export const DialogContainer = styled.div<{ layout: DialogLayout; theme: DialogTheme; size?: DialogSize; bgImage?: string }>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === 'horizontal' ? 'row' : 'column')};
  align-items: ${({ layout }) => (layout === 'horizontal' ? 'center' : 'flex-start')};
  justify-content: space-between;
  gap: 20px;
  padding: ${({ size }) => (size === 'small' ? '16px' : size === 'large' ? '32px' : '24px')};
  border-radius: 12px;
  width: 100%;
  max-width: ${({ layout, size }) => {
    if (layout === 'horizontal') {
      return size === 'small' ? '480px' : size === 'large' ? '720px' : '600px';
    }
    return size === 'small' ? '280px' : size === 'large' ? '440px' : '360px';
  }};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  ${({ theme, bgImage }) => 
    theme === 'image' 
      ? `
          background-color: #0f172a;
          background-image: ${bgImage ? `url(${bgImage})` : 'linear-gradient(135deg, #020617 0%, #0f766e 50%, #020617 100%)'};
          background-size: cover;
          background-position: center;
          color: #ffffff;
        `
      : `
          background-color: #ffffff;
          border: 1px solid #f1f5f9;
          color: #0f172a;
        `
  }
`;

export const ContentContainer = styled.div<{ layout: DialogLayout }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: ${({ layout }) => (layout === 'horizontal' ? '1' : 'none')};
  padding-right: ${({ layout }) => (layout === 'horizontal' ? '16px' : '0')};
`;

export const Title = styled.h3<{ theme: DialogTheme }>`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => (theme === 'image' ? '#ffffff' : '#0f172a')};
`;

export const Description = styled.p<{ theme: DialogTheme }>`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => (theme === 'image' ? '#cbd5e1' : '#64748b')};
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

export const PrimaryButton = styled.button<{ theme: DialogTheme }>`
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${({ theme }) => 
    theme === 'image'
      ? `
          background-color: #ffffff;
          color: #0f172a;
          &:hover { background-color: #f8fafc; }
        `
      : `
          background-color: #2563eb;
          color: #ffffff;
          &:hover { background-color: #1d4ed8; }
        `
  }
`;

export const SecondaryButton = styled.button<{ theme: DialogTheme }>`
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${({ theme }) => 
    theme === 'image'
      ? `
          background-color: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          backdrop-filter: blur(8px);
          &:hover { background-color: rgba(255, 255, 255, 0.25); }
        `
      : `
          background-color: #eff6ff;
          color: #2563eb;
          &:hover { background-color: #dbeafe; }
        `
  }
`;
