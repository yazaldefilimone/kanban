import type { NextPage } from 'next';
import { userFactory } from '~/infrastructure/factories';
import { SignTemplete } from '~/infrastructure/ui/templetes/Sign';

const Sign: NextPage = () => {
  const factory = userFactory();

  return <SignTemplete userUseCase={factory} />;
};

export default Sign;
