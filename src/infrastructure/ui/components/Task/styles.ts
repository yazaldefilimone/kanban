import styled from 'styled-components';

export const TaskContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 1rem;
  border: 1px solid var(--gray-color-alt);
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const TaskContent = styled.div`
  cursor: default;
  padding: 1rem;
  background-color: var(--gray-color);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;

  gap: 0.2rem;
  --tw-shadow: 0 4px 6px 0px rgba(54, 78, 126, 0.1);
  --tw-shadow-colored: 0 4px 6px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border: 1px solid transparent;
  span {
    font-weight: bold;
    color: var(--text-color);
    cursor: default;
  }
  p {
    cursor: default;
    color: var(--gray-color-alt);
  }
  &:hover {
    border-color: var(--first-color);
  }
`;
