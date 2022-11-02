import styled from 'styled-components';

export const ButtonContainer = styled.button<{ bg: boolean; border: boolean }>`
  padding: 0.5rem 1.2rem;
  background: ${(props) => (props.bg ? 'var(--first-color)' : 'none')};
  color: var(--text-color);
  font-size: var(--normal-font-size);
  border-radius: 0.4rem;
  border: 2px solid ${(props) => (props.border ? 'var(--first-color)' : 'transparent')};
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  &:hover {
    opacity: 0.9;
  }
`;
