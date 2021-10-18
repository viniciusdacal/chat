import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  justify-content: space-between;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }
`;

export const NoUser = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  padding: 1rem;
`;
