import React from 'react';
import type { AvatarProps } from './Avatar.type';
import * as S from './Avatar.style';

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="#2563eb" style={{ width: '1.2em', height: '1.2em', marginLeft: '4px' }}>
    <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/>
    <path d="M10.09 16.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" fill="#fff" />
  </svg>
);

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({
  src,
  initials,
  size = 'md',
  bgColor,
  title,
  subtitle,
  isVerified = false,
  showAddAction = false,
  group,
  maxGroup = 4,
  remainingCount,
  className,
  ...props
}, ref) => {

  const renderAvatar = (imgSrc?: string, text?: string, bg?: string, isGroupItem = false, key?: number) => (
    <S.AvatarImage
      key={key}
      size={size}
      bgColor={bg}
      $isGroupItem={isGroupItem}
      style={imgSrc ? { backgroundImage: `url(${imgSrc})` } : undefined}
    >
      {!imgSrc && text}
    </S.AvatarImage>
  );

  let visualContent = null;

  if (group && group.length > 0) {
    const visibleAvatars = group.slice(0, maxGroup);
    const hiddenCount = remainingCount !== undefined ? remainingCount : Math.max(0, group.length - maxGroup);

    visualContent = (
      <S.GroupWrapper>
        <S.AvatarsOverlap>
          {visibleAvatars.map((item, index) => 
            renderAvatar(item.src, item.initials, item.bgColor, true, index)
          )}
        </S.AvatarsOverlap>
        {hiddenCount > 0 && <S.RemainingCount>+{hiddenCount}</S.RemainingCount>}
      </S.GroupWrapper>
    );
  } else {
    visualContent = renderAvatar(src, initials, bgColor, false);
  }

  const hasText = title || subtitle;

  return (
    <S.Container ref={ref} className={className} {...props}>
      {showAddAction && (
        <S.AddButton>
          <PlusIcon />
        </S.AddButton>
      )}
      
      {visualContent}

      {hasText && (
        <S.TextContainer>
          {title && (
            <S.TitleRow>
              {title}
              {isVerified && <VerifiedIcon />}
            </S.TitleRow>
          )}
          {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        </S.TextContainer>
      )}
    </S.Container>
  );
});

Avatar.displayName = 'Avatar';
