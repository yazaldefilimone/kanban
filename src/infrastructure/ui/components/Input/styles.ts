import styled from 'styled-components';

export const InputContainer = styled.div`
  > input {
    min-width: 250px;
    min-height: 30px;
    background: none;
    border: none;
    outline: none;
    border: 1px solid var(--gray-color);
    color: var(--text-color);
    padding: 0.5rem;
    transition: 0.3s;
    border-radius: 0.2rem;
    &:hover {
      border-color: var(--first-color);
    }
  }
`;
