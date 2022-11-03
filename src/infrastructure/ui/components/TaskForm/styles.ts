import styled from 'styled-components';

export const TaskFormContainer = styled.div`
  z-index: 20;
  background-color: var(--gray-color);
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 900px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const TaskFormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 450px;
`;

export const TaskFormArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  > label {
    font-weight: 600;
  }
  > textarea {
    min-width: 250px;
    height: 70px;
    background: none;
    resize: none;
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
export const SubTaskInput = styled.div``;

export const SubTaskFormContainer = styled.div`
  > label {
    font-weight: 600;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubtaskBtn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0.5rem;
`;

export const Subtasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
