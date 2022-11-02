import { FunctionComponent, ReactNode } from 'react';
import { ButtonContainer } from './styles';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  action: () => void;
  children: ReactNode;
  bg?: boolean;
  border?: boolean;
};

export const Button: FunctionComponent<ButtonProps> = ({ action, type, children, bg, border }) => {
  return (
    <ButtonContainer type={type || 'button'} bg={bg === undefined ? true : bg} border={border || false} onClick={() => action()}>
      {children}
    </ButtonContainer>
  );
};
