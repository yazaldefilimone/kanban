import { Dispatch, FunctionComponent, ReactNode, SetStateAction, useState } from 'react';

import { ModalContainer } from './styles';
type modalType = {
  children: ReactNode;
  active: boolean;
  SetActive: Dispatch<SetStateAction<boolean>>;
};
export const Modal: FunctionComponent<modalType> = ({ children, active, SetActive }) => {
  function handlerClick(event: any) {
    const isTagModal = event.target.id;
    if (isTagModal) {
      SetActive((act: boolean) => !act);
    }
  }
  return (
    <ModalContainer onClick={handlerClick} id="modal" active={active}>
      {children}
    </ModalContainer>
  );
};
