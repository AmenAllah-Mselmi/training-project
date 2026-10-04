import { HTMLAttributes } from 'react';

export type GiftCardBrand = 
  | 'amazon' 
  | 'steam' 
  | 'xbox' 
  | 'apple' 
  | 'spotify' 
  | 'googleplay' 
  | 'netflix' 
  | 'paypal' 
  | 'generic';

export type GiftCardSize = 'sm' | 'md' | 'lg';
export type GiftCardVariant = 'light' | 'dark' | 'brand';

export interface GiftCardProps extends HTMLAttributes<HTMLDivElement> {
  /** The brand logo to display */
  brand?: GiftCardBrand;
  /** The monetary value of the gift card */
  amount?: number | string;
  /** Overall size of the card */
  size?: GiftCardSize;
  /** Visual variant/theme of the card background */
  variant?: GiftCardVariant;
}
