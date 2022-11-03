import styled from 'styled-components';

export const ModalContainer = styled.div<{ active: boolean }>`
  background: rgb(0 1 18 / 0.5);
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  align-items: center;
  justify-content: center;
  display: ${({ active }) => (active ? 'flex' : 'none')};
`;
