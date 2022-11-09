import styled from 'styled-components';

export const LoginContainer = styled.div`
  /* background-color: red; */
  border: 2px solid var(--gray-color);
  padding: 2rem;
  width: 400px;
  border-radius: 0.3rem;
  p {
    margin-bottom: 2rem;
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
    max-width: 150px;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-color);
  padding: 0.6rem;
  border-radius: 0.2rem;
  color: #fff;
  cursor: pointer;
`;

export const LoginFormSocial = styled.div`
  margin-top: 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;
`;
