import { UserUseCase } from '~/application/usecases';
import { LocalStorage, HttpClient } from '~/infrastructure/services';
import { env } from '~/shared/env';

export const userFactory = () => {
  const localStorage = new LocalStorage();
  const httpClient = new HttpClient();
  const userUseCase = new UserUseCase(localStorage, httpClient, env.backendAddress);

  return userUseCase;
};
