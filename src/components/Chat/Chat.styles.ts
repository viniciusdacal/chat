import UserAvatar from 'components/User/Avatar/Avatar';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--blue);
  border-radius: var(--border-radius-md);

  padding: 1rem;
  margin-top: 2rem;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

export const Messages = styled.ul`
  flex-grow: 1;
  gap: 1rem;
  display: flex;
  list-style: none;
  flex-direction: column;
  padding: 0;
  overflow-y: scroll;
`;

export const Group = styled.li<{ isUser: boolean }>`
  gap: 0.5rem;
  display: flex;
  list-style: none;
  flex-direction: column;
  margin-left: ${({ isUser }) => (isUser ? 'auto' : 0)};
  padding-left: 3rem;
  padding-right: 3rem;
  max-width: 80%;
  position: relative;
`;

export const AuthorAvatar = styled(UserAvatar)`
  position: absolute;
  bottom: 0;
  right: 10px;
`;

export const BotAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 10px;
  border-radius: 50%;
  height: 28px;
  width: 28px;
  background-color: var(--grey-700);
  font-size: 1.5rem;
`;

export const Typing = styled.div`
  padding: 0.5rem 1.5rem;
`;

export const Finished = styled.div`
  margin-left: auto;
  color: var(--light);
  opacity: 0.8;
  font-size: 0.8rem;
  padding: 0.5rem 0;
`;
