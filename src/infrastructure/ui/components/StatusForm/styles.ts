import styled from 'styled-components';

export const SubtaskFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  align-items: center;
  gap: 0.5rem;
  > button {
    width: max-content;
    height: max-content;
    padding: 0.2rem 0.4rem;
  }
`;
