import styled from 'styled-components';
import { fadeIn, slideToTop } from 'utils/styles/animations';

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid var(--blue);
  border-radius: var(--border-radius-md);
  width: 100%;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 300ms ease-in, ${slideToTop} 300ms;
`;

export const FullName = styled.span`
  font-size: 1.5rem;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const Actions = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1rem;
`;
