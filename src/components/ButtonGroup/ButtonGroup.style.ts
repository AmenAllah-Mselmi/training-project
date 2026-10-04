import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { ButtonGroupOrientation } from './ButtonGroup.type';

export const Container = styled.div<{ 
  orientation: ButtonGroupOrientation; 
  attached: boolean;
  fullWidth: boolean;
  gap: number;
}>`
  display: flex;
  flex-direction: ${({ orientation }) => orientation === 'vertical' ? 'column' : 'row'};
  gap: ${({ attached, gap }) => attached ? '0' : `${gap}px`};
  width: ${({ fullWidth, orientation }) => fullWidth ? '100%' : 'fit-content'};

  ${({ fullWidth, orientation }) => fullWidth && orientation === 'vertical' && css`
    & > * {
      width: 100%;
    }
  `}

  ${({ attached, orientation }) => attached && css`
    & > * {
      margin: 0;
    }
    
    ${orientation === 'horizontal' ? css`
      & > *:not(:first-of-type) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      & > *:not(:last-of-type) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    ` : css`
      & > *:not(:first-of-type) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      & > *:not(:last-of-type) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}
  `}
`;
