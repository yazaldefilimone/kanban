import styled from 'styled-components';

export const BoardContainer = styled.section`
  margin-left: 300px;
  padding: 1rem 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;
export const BoardColumn = styled.div`
  width: 100%;
  min-width: 228px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BoardColumnHead = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const BoardTitle = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: normal;
  text-transform: uppercase;
`;

export const BoardStatus = styled.span<{ color: string }>`
  width: 14px;
  height: 14px;
  background-color: ${({ color }) => color};
  display: block;
  border-radius: 50%;
`;
