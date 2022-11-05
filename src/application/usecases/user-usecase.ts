/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUserUseCase } from '~/domain/usecases';
import { right, left } from '~/shared/either';
import { IHttpClient, ILocalStorage } from '~/application/protocols/services';

export class UserUseCase implements IUserUseCase {
  private readonly localStorage: ILocalStorage<{ token?: string; id?: string }>;
  private readonly httpClient: IHttpClient;
  constructor(localStorage: ILocalStorage<{ token?: string; id?: string }>, httpClient: IHttpClient) {
    this.localStorage = localStorage;
    this.httpClient = httpClient;
  }

  async login(data: IUserUseCase.LoginInput): IUserUseCase.LoginOutput {
    throw new Error('implemented');
  }
  async sign(data: IUserUseCase.SignOutput): IUserUseCase.SignOutput {
    throw new Error('implemented');
  }
  async getId(data: IUserUseCase.GetIdOutput): IUserUseCase.GetIdOutput {
    throw new Error('implemented');
  }
  async getToken(data: IUserUseCase.GetTokenOutput): IUserUseCase.GetTokenOutput {
    throw new Error('implemented');
  }
}
