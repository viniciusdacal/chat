import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideToTop = keyframes`
  from { transform: translateY(100px); }
  to { opacity: translateY(0); }
`;
