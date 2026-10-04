import React, { forwardRef } from 'react';
import type { GiftCardProps } from './GiftCard.type';
import * as S from './GiftCard.style';

const AmazonLogo = () => (
  <svg viewBox="0 0 100 30" fill="currentColor">
    {/* Simplified Amazon Text */}
    <text x="50" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" textAnchor="middle" letterSpacing="-1">amazon</text>
    {/* Smile Arrow */}
    <path d="M25 25 Q50 35 75 25 Q70 28 80 25 Q75 22 75 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SteamLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor">
    <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
    <circle cx="20" cy="20" r="4"/>
    <path d="M30 15 L40 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="45" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
    <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" letterSpacing="1">STEAM</text>
  </svg>
);

const XboxLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor">
    <circle cx="20" cy="20" r="14" fill="currentColor"/>
    <path d="M12 12 Q20 20 28 28 M12 28 Q20 20 28 12" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" style={{ mixBlendMode: 'difference' }} />
    <text x="45" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">XBOX</text>
  </svg>
);

const SpotifyLogo = () => (
  <svg viewBox="0 0 140 40" fill="currentColor">
    <circle cx="20" cy="20" r="14" fill="currentColor"/>
    <path d="M12 15 Q20 12 28 15 M13 20 Q20 18 27 20 M15 25 Q20 23 25 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" style={{ mixBlendMode: 'difference' }} />
    <text x="45" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" letterSpacing="-0.5">Spotify</text>
  </svg>
);

const NetflixLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor">
    <text x="60" y="28" fontFamily="'Arial Black', sans-serif" fontSize="24" fontWeight="900" textAnchor="middle" letterSpacing="1">NETFLIX</text>
  </svg>
);

const AppleLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor">
    {/* Simplified Apple Shape */}
    <path d="M22 28 C16 28 12 22 15 16 C17 12 21 12 23 14 C25 12 29 12 31 16 C34 22 30 28 24 28 C23 28 22 28 22 28 Z" />
    <path d="M25 12 C24 9 27 7 28 7 C29 9 26 12 25 12 Z" />
    <text x="45" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">iStore</text>
  </svg>
);

const GooglePlayLogo = () => (
  <svg viewBox="0 0 150 40" fill="currentColor">
    <polygon points="15,10 15,30 30,20" />
    <text x="40" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">Google Play</text>
  </svg>
);

const PayPalLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor">
    <text x="60" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fontStyle="italic" textAnchor="middle">PayPal</text>
  </svg>
);

const GenericLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor">
    <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle">GIFT CARD</text>
  </svg>
);

export const GiftCard = forwardRef<HTMLDivElement, GiftCardProps>(
  (
    {
      brand = 'amazon',
      amount = 100,
      size = 'md',
      variant = 'brand',
      ...rest
    },
    ref
  ) => {
    
    const renderLogo = () => {
      switch (brand) {
        case 'amazon': return <AmazonLogo />;
        case 'steam': return <SteamLogo />;
        case 'xbox': return <XboxLogo />;
        case 'spotify': return <SpotifyLogo />;
        case 'netflix': return <NetflixLogo />;
        case 'apple': return <AppleLogo />;
        case 'googleplay': return <GooglePlayLogo />;
        case 'paypal': return <PayPalLogo />;
        default: return <GenericLogo />;
      }
    };

    const displayAmount = typeof amount === 'number' ? `$${amount}` : amount;

    return (
      <S.CardContainer ref={ref} $size={size} $variant={variant} $brand={brand} {...rest}>
        <S.TopSection>
          <S.AmountBadge>{displayAmount}</S.AmountBadge>
        </S.TopSection>
        
        <S.CenterSection>
          {renderLogo()}
        </S.CenterSection>
        
        <S.BottomSection>
          <S.GiftCardLabel>Gift Card</S.GiftCardLabel>
        </S.BottomSection>
      </S.CardContainer>
    );
  }
);

GiftCard.displayName = 'GiftCard';
