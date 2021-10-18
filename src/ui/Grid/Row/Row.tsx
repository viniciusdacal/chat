import React from 'react';

import * as S from './Row.styles';

interface UIGridRowProps {
  className?: string;
}

const UIGridRow: React.FC<UIGridRowProps> = ({ children, className }) => {
  return <S.Container className={className}>{children}</S.Container>;
};

export default UIGridRow;
