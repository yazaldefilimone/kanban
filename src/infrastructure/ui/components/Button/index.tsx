import { FunctionComponent, ReactNode } from 'react';
import { ButtonContainer } from './styles';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  action: () => void;
  children: ReactNode;
  bg?: boolean;
  border?: boolean;
  loading?: boolean;
};

export const Button: FunctionComponent<ButtonProps> = ({ action, type, children, bg, border, loading }) => {
  return (
    <ButtonContainer
      type={type || 'button'}
      bg={bg === undefined ? true : bg}
      border={border || false}
      disabled={loading}
      onClick={() => action()}
    >
      {children}
      {loading && <span className="loading"></span>}
    </ButtonContainer>
  );
};
