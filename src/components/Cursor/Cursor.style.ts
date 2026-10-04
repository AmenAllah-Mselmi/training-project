import styled from '@emotion/styled';

export const CursorWrapper = styled.div<{ $size?: number }>`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  pointer-events: none; /* Cursors shouldn't interfere with real mouse events */
  transform: ${({ $size }) => ($size ? `scale(${$size})` : 'scale(1)')};
  transform-origin: top left;
  z-index: 9999;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));

  svg {
    display: block;
  }
`;

export const FigmaLabel = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  color: #fff;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  margin-left: 12px;
  margin-top: 16px;
  white-space: nowrap;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
`;
