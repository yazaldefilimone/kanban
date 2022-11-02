import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  > label {
    font-weight: 600;
  }
  > input {
    min-width: 250px;
    min-height: 45px;
    background: none;
    border: none;
    outline: none;
    border: 2px solid var(--border-color);
    color: var(--text-color);
    font-size: var(--normal-font-size);
    padding: 0.5rem;
    transition: 0.3s;
    border-radius: 0.4rem;

    &:hover {
      border-color: var(--first-color);
    }
  }
`;
