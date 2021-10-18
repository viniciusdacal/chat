import React from 'react';

import * as S from './Grid.styles';

interface UIGridProps {
  className?: string;
}

const UIGrid: React.FC<UIGridProps> = ({ children, className }) => {
  return <S.Container className={className}>{children}</S.Container>;
};

export default UIGrid;
