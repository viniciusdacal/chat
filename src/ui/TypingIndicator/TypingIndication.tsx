import React from 'react';

import * as S from './TypingIndicator.styles';

const UITypingIndicator: React.FC = () => (
  <S.Container>
    <S.Tiblock className="tiblock">
      <S.Tidot className="tidot" />
      <S.Tidot className="tidot" />
      <S.Tidot className="tidot" />
    </S.Tiblock>
  </S.Container>
);

export default UITypingIndicator;
