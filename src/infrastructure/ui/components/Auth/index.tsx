import { FunctionComponent, ReactNode } from 'react';
import { AuthContainer } from './styles';

type AuthComponentProps = {
  children: ReactNode;
};
export const AuthComponent: FunctionComponent<AuthComponentProps> = ({ children }) => {
  return <AuthContainer>{children}</AuthContainer>;
};
