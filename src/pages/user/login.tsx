import type { NextPage } from 'next';
import { userFactory } from '~/infrastructure/factories';
import { Login } from '~/infrastructure/ui/templetes/Login';

const login: NextPage = () => {
  const factory = userFactory();

  return <Login userUseCase={factory} />;
};

export default login;
