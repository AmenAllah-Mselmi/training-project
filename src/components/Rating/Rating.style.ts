import styled from '@emotion/styled';
import { Rating as MuiRating } from '@mui/material';
import type { RatingSize, RatingColor } from './Rating.type';

const getSizeConfig = (size: RatingSize) => {
  switch (size) {
    case 'small': return { star: '16px', gap: '2px', text: '12px' };
    case 'large': return { star: '28px', gap: '6px', text: '16px' };
    case 'medium':
    default: return { star: '20px', gap: '4px', text: '14px' };
  }
};

const getColorConfig = (color: RatingColor) => {
  switch (color) {
    case 'warning': return '#f59e0b';
    case 'primary':
    default: return '#2563eb';
  }
};

export const Container = styled.div<{ $size: RatingSize }>`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: ${({ $size }) => getSizeConfig($size).text};
  color: #64748b;
`;

export const StyledRating = styled(MuiRating)<{ $size: RatingSize; $color: RatingColor }>`
  color: ${({ $color }) => getColorConfig($color)};
  
  .MuiRating-icon {
    font-size: ${({ $size }) => getSizeConfig($size).star};
    margin-right: ${({ $size }) => getSizeConfig($size).gap};
  }
  
  .MuiRating-icon:last-child {
    margin-right: 0;
  }

  .MuiRating-iconEmpty {
    color: #e2e8f0;
  }
  
  &.Mui-disabled {
    opacity: 0.5;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
