import styled from '@emotion/styled';
import type { GiftCardSize, GiftCardVariant, GiftCardBrand } from './GiftCard.type';

const getCardWidth = (size: GiftCardSize) => {
  switch (size) {
    case 'sm': return '220px';
    case 'md': return '300px';
    case 'lg': return '380px';
    default: return '300px';
  }
};

const getBackgroundAndColor = (brand: GiftCardBrand, variant: GiftCardVariant) => {
  if (variant === 'light') {
    return `
      background: radial-gradient(circle at top left, #ffffff, #f1f5f9);
      color: #1e293b;
    `;
  }
  
  if (variant === 'dark') {
    return `
      background: radial-gradient(circle at bottom right, #0f172a, #1e293b);
      color: #ffffff;
    `;
  }
  
  // Brand specific colors
  switch (brand) {
    case 'amazon':
      return `background: linear-gradient(135deg, #146eb4, #232f3e); color: white;`;
    case 'xbox':
      return `background: linear-gradient(135deg, #107c10, #5c9e37); color: white;`;
    case 'steam':
      return `background: linear-gradient(135deg, #171a21, #66c0f4); color: white;`;
    case 'spotify':
      return `background: linear-gradient(135deg, #1ed760, #1db954); color: white;`;
    case 'netflix':
      return `background: linear-gradient(135deg, #e50914, #000000); color: white;`;
    case 'apple':
      return `background: linear-gradient(135deg, #ffffff, #a2aaad); color: #000000;`;
    case 'googleplay':
      return `background: linear-gradient(135deg, #3bccff, #0a4bf4); color: white;`;
    case 'paypal':
      return `background: linear-gradient(135deg, #003087, #009cde); color: white;`;
    default:
      return `background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white;`;
  }
};

export const CardContainer = styled.div<{ $size: GiftCardSize; $variant: GiftCardVariant; $brand: GiftCardBrand }>`
  position: relative;
  width: ${({ $size }) => getCardWidth($size)};
  aspect-ratio: 1.586 / 1;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ $size }) => ($size === 'sm' ? '16px' : $size === 'lg' ? '28px' : '24px')};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  ${({ $brand, $variant }) => getBackgroundAndColor($brand, $variant)}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
  }

  /* Optional decorative texture overlay to match the images */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      rgba(255, 255, 255, 0.03) 10px,
      transparent 20px
    );
    z-index: 0;
    pointer-events: none;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`;

export const AmountBadge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  z-index: 1;

  svg {
    max-width: 70%;
    max-height: 50%;
    height: auto;
    fill: currentColor;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const GiftCardLabel = styled.div`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.7;
`;
