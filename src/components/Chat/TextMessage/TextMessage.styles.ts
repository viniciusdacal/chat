import styled from 'styled-components';

export enum MessageColor {
  blue = 'var(--blue)',
  grey = 'var(--grey-300)',
}

export type MessageColorKeys = keyof typeof MessageColor;

export const Container = styled.div<{ color: MessageColorKeys }>`
  background-color: ${({ color }) => MessageColor[color]};
  color: var(--dark);
  padding: 0.5rem;
  border-radius: 6px;
`;
