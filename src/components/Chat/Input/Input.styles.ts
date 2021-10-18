import styled from 'styled-components';
import * as UI from 'ui';

export const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Input = styled(UI.InputText)`
  background-color: var(--grey-700);
  border: 0;
  flex-grow: 1;
  border-radius: var(--interactive-height-md);
  color: var(--light);
  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  background-color: transparent;
  color: var(--blue);
  border: 0;
  border-radius: var(--interactive-height-md);
  height: var(--interactive-height-md);
  width: var(--interactive-height-md);
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;

  &:hover {
    background-color: var(--grey-700);
  }
`;
