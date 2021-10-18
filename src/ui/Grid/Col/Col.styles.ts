import styled from 'styled-components/macro';

import { calculateColumnWidth } from '../utils';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<{ sm?: ColSpan }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: ${({ sm }) => calculateColumnWidth({ sm })};
`;
