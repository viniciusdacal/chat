import styled from 'styled-components';

enum ButtonColor {
  pink = 'var(--pink)',
  blue = 'var(--blue)',
  green = 'var(--green)',
  purple = 'var(--purple)',
  red = 'var(--red)',
}

export type ButtonVariant = 'raised' | 'bordered';

export type ButtonColors = keyof typeof ButtonColor;

const getBackgroundColor = ({ color, variant }: { color?: ButtonColors; variant?: ButtonVariant }) => {
  if (variant === 'bordered') {
    return 'transparent';
  }

  return color ? ButtonColor[color] : ButtonColor.blue;
};

const getBorder = ({ color = 'blue', variant }: { color?: ButtonColors; variant?: ButtonVariant }) => {
  if (variant !== 'bordered') {
    return 0;
  }

  return `1px solid ${ButtonColor[color]}`;
};

const getColor = ({ color = 'blue', variant }: { color?: ButtonColors; variant?: ButtonVariant }) => {
  if (variant !== 'bordered') {
    return 'var(--dark)';
  }

  return ButtonColor[color];
};

export const Container = styled.button<{ color?: ButtonColors; variant?: ButtonVariant }>`
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${({ color, variant }) => getBackgroundColor({ color, variant })};
  color: ${({ color, variant }) => getColor({ color, variant })};
  border-radius: var(--border-radius-md);
  height: var(--interactive-height-md);
  font-weight: bold;
  border: ${({ color, variant }) => getBorder({ color, variant })};
`;
