import React from 'react';
import type { ButtonProps } from './Button.type';
import * as S from './Button.style';

const PlusCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

const ArrowRightCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

const Spinner = () => (
  <S.LoadingIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </S.LoadingIcon>
);

const GoogleIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0 5.483 0 0 5.372 0 12s5.483 12 12.24 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/></svg>;
const AppleIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05 1.8-3.08 1.8-1.09 0-1.45-.69-2.71-.69-1.26 0-1.68.67-2.73.67-1.05 0-2.12-.86-3.13-1.85-2.43-2.38-4.22-6.74-2.88-10.42.66-1.83 2.1-2.99 3.68-2.99 1.22 0 2.27.8 3.01.8.72 0 1.99-.92 3.42-.92 1.48 0 2.82.72 3.65 1.92-3.1 1.73-2.58 6.07.45 7.45-.68 1.69-1.74 3.32-2.68 4.23zM14.88 4.63c.69-.87 1.15-2.08.97-3.28-1.09.06-2.45.74-3.23 1.63-.66.75-1.22 2.01-1.02 3.16 1.21.1 2.51-.62 3.28-1.51z"/></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>;
const TwitterIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  label = 'Button',
  variant = 'solid',
  color = 'primary',
  size = 'medium',
  borderRadius = 'medium',
  hasLeftIcon = false,
  hasRightIcon = false,
  isLoading = false,
  iconOnly = false,
  brand = 'none',
  disabled,
  children,
  ...props
}, ref) => {
  
  let actualLeftIcon = hasLeftIcon ? <PlusCircle /> : null;
  if (brand === 'google') actualLeftIcon = <GoogleIcon />;
  if (brand === 'facebook') actualLeftIcon = <FacebookIcon />;
  if (brand === 'twitter') actualLeftIcon = <TwitterIcon />;
  if (brand === 'apple') actualLeftIcon = <AppleIcon />;

  const actualLabel = children || label;
  
  const content = iconOnly ? (
    isLoading ? <Spinner /> : (actualLeftIcon || <PlusCircle />)
  ) : (
    <>
      {isLoading ? <Spinner /> : actualLeftIcon}
      <span>{actualLabel}</span>
      {!isLoading && hasRightIcon && <ArrowRightCircle />}
    </>
  );

  return (
    <S.StyledButton
      ref={ref}
      variant={variant}
      color={color}
      size={size}
      borderRadius={borderRadius}
      iconOnly={iconOnly}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </S.StyledButton>
  );
});

Button.displayName = 'Button';
