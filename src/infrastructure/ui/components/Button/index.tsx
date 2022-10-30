import { FunctionComponent, ReactNode } from 'react';
import { ButtonContainer } from './styles';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  action: () => void;
  children: ReactNode;
  bg?: boolean;
};

export const Button: FunctionComponent<ButtonProps> = ({ action, type, children, bg }) => {
  return (
    <ButtonContainer type={type || 'button'} bg={bg === undefined ? true : bg} onClick={() => action()}>
      {children}
    </ButtonContainer>
  );
};
