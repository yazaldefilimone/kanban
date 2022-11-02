import styled from 'styled-components';

export const ComboBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  > label {
    font-weight: 600;
  }
`;
export const ComboBoxContent = styled.div``;
export const ComboBoxSelect = styled.div<{ active: boolean }>`
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    border-color: var(--first-color);
  }

  > svg {
    transition: 0.3s;
    transform: ${({ active }) => (active ? 'rotate(-180deg)' : 'none')};
  }
`;
export const ComboBoxOptions = styled.div<{ active: boolean }>`
  position: relative;
  margin-top: 10px;
  border-radius: 0.4rem;
  padding: 0.5rem;
  border: 2px solid var(--border-color);
  transition: 0.3s;
  /* background-color: var(--first-color); */
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.2);
  gap: 0.2rem;
`;

export const ComboBoxOption = styled.div`
  padding: 0.4rem;
  border-radius: 0.4rem;
  /* border: 1px solid white; */
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border-color: var(--first-color);
  }
`;
