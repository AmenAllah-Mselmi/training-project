import React, { useState, useEffect } from 'react';
import type { ToggleProps } from './Toggle.type';
import * as S from './Toggle.style';

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(({
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  size = 'medium',
  variant = 'standard',
  togglePlacement = 'left',
  label,
  subLabel,
  badge,
  description,
  link,
  onLinkClick,
  rightTitle,
  rightDescription,
  rightContent,
  leftLabel,
  className,
}, ref) => {
  const [internalChecked, setInternalChecked] = useState(
    checked !== undefined ? checked : defaultChecked
  );

  useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const newChecked = e.target.checked;
    if (checked === undefined) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      onLinkClick?.();
    }
  };

  const hasMultiline = !!(description || link || rightDescription);

  const renderToggle = () => (
    <S.SwitchTrack $size={size} $checked={internalChecked} $disabled={disabled} $hasMultiline={hasMultiline}>
      <S.SwitchThumb $size={size} $checked={internalChecked} $disabled={disabled} />
    </S.SwitchTrack>
  );

  const renderBadge = () => {
    if (!badge) return null;
    if (typeof badge === 'string') return <S.StyledBadge $disabled={disabled}>{badge}</S.StyledBadge>;
    return badge;
  };

  const renderContent = () => {
    if (!label && !subLabel && !description && !link && !badge) return null;
    return (
      <S.ContentContainer>
        {(label || subLabel || badge) && (
          <S.TitleRow>
            {label && <S.LabelText $disabled={disabled}>{label}</S.LabelText>}
            {subLabel && <S.SubLabelText $disabled={disabled}>{subLabel}</S.SubLabelText>}
            {renderBadge()}
          </S.TitleRow>
        )}
        {description && <S.DescriptionText $disabled={disabled}>{description}</S.DescriptionText>}
        {link && (
          <div>
            <S.LinkText $disabled={disabled} onClick={handleLinkClick}>{link}</S.LinkText>
          </div>
        )}
      </S.ContentContainer>
    );
  };

  return (
    <S.Container 
      className={className} 
      $variant={variant} 
      $checked={internalChecked} 
      $disabled={disabled}
      $hasMultiline={hasMultiline}
    >
      <S.HiddenInput 
        type="checkbox" 
        ref={ref}
        checked={internalChecked} 
        disabled={disabled}
        onChange={handleChange} 
      />
      
      {leftLabel && <S.LeftLabel $disabled={disabled}>{leftLabel}</S.LeftLabel>}
      
      {togglePlacement === 'left' && renderToggle()}
      
      {renderContent()}
      
      {togglePlacement === 'right' && renderToggle()}
      
      {(rightTitle || rightDescription || rightContent) && (
        <S.RightContentContainer>
          {rightTitle && <S.LabelText $disabled={disabled}>{rightTitle}</S.LabelText>}
          {rightDescription && <S.SubLabelText $disabled={disabled}>{rightDescription}</S.SubLabelText>}
          {rightContent}
        </S.RightContentContainer>
      )}
    </S.Container>
  );
});

Toggle.displayName = 'Toggle';
