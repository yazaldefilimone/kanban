import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 0.5rem 1.2rem;
  background-color: var(--first-color);
  color: var(--text-color);
  border-radius: 0.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  min-height: 35px;
  &:hover {
    opacity: 0.9;
  }
`;
