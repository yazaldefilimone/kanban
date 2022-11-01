import styled from 'styled-components';

export const TaskContainer = styled.ul<{ isDraw: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  gap: 0.7rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ isDraw }) => (isDraw ? 'var(--first-color)' : 'var(--gray-color-alt)')};
  padding: 0.5rem;
`;

export const TaskContent = styled.div<{ isDraw: boolean }>`
  cursor: default;
  padding: 1rem;
  background-color: var(--gray-color);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  user-select: auto;
  gap: 0.2rem;
  --tw-shadow: 0 4px 6px 0px rgba(54, 78, 126, 0.1);
  --tw-shadow-colored: 0 4px 6px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border: 2px solid ${({ isDraw }) => (isDraw ? 'var(--first-color)' : 'transparent')};
  span {
    font-weight: bold;
    color: var(--text-color);
    cursor: default;
    user-select: none;
  }
  p {
    cursor: default;
    user-select: none;
    color: var(--gray-color-alt);
  }
  &:hover {
    border-color: var(--first-color);
  }
`;
