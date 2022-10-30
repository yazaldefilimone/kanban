import styled from 'styled-components';

export const LoginContainer = styled.div`
  /* background-color: red; */
  border: 2px solid var(--gray-color);
  padding: 2rem;
  border-radius: 0.3rem;
  p {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: var(--h1-font-size);
  }
`;
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > button {
    max-width: max-content;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-color);
  padding: 0.3rem;
  border-radius: 0.2rem;
  color: #fff;
  cursor: pointer;
`;

export const LoginFormSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
