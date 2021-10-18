import React from 'react';

import * as S from './Col.styles';

interface UIGridColProps {
  className?: string;
  sm: ColSpan;
}

const UIGridCol: React.FC<UIGridColProps> = ({ children, className, sm }) => {
  return (
    <S.Container className={className} sm={sm}>
      {children}
    </S.Container>
  );
};

export default UIGridCol;
