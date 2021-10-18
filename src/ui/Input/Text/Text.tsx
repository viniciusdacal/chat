import React from 'react';

import * as S from './Text.styles';

type UIInputTextProps = React.InputHTMLAttributes<HTMLInputElement>;

const UIInputText: React.FC<UIInputTextProps> = (props) => {
  return <S.Container type="text" {...props} />;
};

export default UIInputText;
