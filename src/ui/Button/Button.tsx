import React from 'react';

import type { ButtonColors, ButtonVariant } from './Button.styles';
import * as S from './Button.styles';

type UIButtonProps = {
  color?: ButtonColors;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const UIButton: React.FC<UIButtonProps> = ({ children, color, variant, ...restProps }) => {
  return (
    <S.Container color={color} variant={variant} {...restProps}>
      {children}
    </S.Container>
  );
};

UIButton.defaultProps = {
  color: 'blue',
  variant: 'raised',
};

export default UIButton;
