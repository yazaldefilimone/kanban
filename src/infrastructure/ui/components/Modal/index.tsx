import { Dispatch, FunctionComponent, ReactNode, SetStateAction, useState } from 'react';

import { ModalContainer } from './styles';
type modalType = {
  children: ReactNode;
  active: boolean;
  SetActive: Dispatch<SetStateAction<boolean>>;
};
export const Modal: FunctionComponent<modalType> = ({ children, active, SetActive }) => {
  function handlerClick() {
    SetActive((act: boolean) => !act);
  }
  return (
    <ModalContainer onClick={handlerClick} active={active}>
      {children}
    </ModalContainer>
  );
};
