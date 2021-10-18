import React from 'react';

import * as S from './Container.styles';

interface UIContainerProps {
  className?: string;
}

const UIContainer: React.FC<UIContainerProps> = ({ children, className }) => {
  return <S.Container className={className}>{children}</S.Container>;
};

export default UIContainer;
