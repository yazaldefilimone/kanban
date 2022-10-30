import styled from 'styled-components';

export const ButtonContainer = styled.button<{ bg: boolean }>`
  padding: 0.5rem 1.2rem;
  background: ${(props) => (props.bg ? 'var(--first-color)' : 'none')};
  color: var(--text-color);
  font-size: var(--normal-font-size);
  border-radius: 0.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  min-height: 40px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  &:hover {
    opacity: 0.9;
  }
`;
