import { FunctionComponent, ReactNode } from 'react';
import { ButtonContainer } from './styles';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  action: () => void;
  children: ReactNode;
};

export const Button: FunctionComponent<ButtonProps> = ({ action, type, children }) => {
  return (
    <ButtonContainer type={type || 'button'} onClick={() => action()}>
      {children}
    </ButtonContainer>
  );
};
