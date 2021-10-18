import styled, { keyframes } from 'styled-components';

const typingAnimation = keyframes`
  0% {
    transform:translateY(0px);
  }
  28% {
    transform:translateY(-5px);
  }
  44% {
    transform:translateY(0px);
  }
`;

export const Container = styled.div`
  .tidot {
    background-color: #90949c;
  }
`;

export const Tiblock = styled.div`
  align-items: center;
  display: flex;
  height: 17px;
`;

export const Tidot = styled.div`
  animation: ${typingAnimation} 1.5s infinite ease-in-out;
  border-radius: 2px;
  display: inline-block;
  height: 4px;
  margin-right: 2px;
  width: 4px;
  &:nth-child(1) {
    animation-delay: 200ms;
  }
  &:nth-child(2) {
    animation-delay: 300ms;
  }
  &:nth-child(3) {
    animation-delay: 400ms;
  }
`;
