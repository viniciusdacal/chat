import React from 'react';

import * as S from './Box.styles';

interface UIGridBoxProps {
  className?: string;
  sm: ColSpan;
}

const UIGridBox: React.FC<UIGridBoxProps> = ({ children, className, sm }) => {
  return (
    <S.Container className={className} sm={sm}>
      {children}
    </S.Container>
  );
};

export default UIGridBox;
