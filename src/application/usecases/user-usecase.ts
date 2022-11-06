import { IUserUseCase } from '~/domain/usecases';
import { right, left } from '~/shared/either';
import { httpStatusCode, IHttpClient, ILocalStorage } from '~/application/protocols/services';

export class UserUseCase implements IUserUseCase {
  private readonly localStorage: ILocalStorage<{ token?: string; id?: string }>;
  private readonly httpClient: IHttpClient;
  private readonly apiAddress: string;
  constructor(localStorage: ILocalStorage<{ token?: string; id?: string }>, httpClient: IHttpClient, apiAddress: string) {
    this.localStorage = localStorage;
    this.httpClient = httpClient;
    this.apiAddress = apiAddress;
  }

  async login(data: IUserUseCase.LoginInput): IUserUseCase.LoginOutput {
    const result = await this.httpClient.request({
      url: `${this.apiAddress}/user/login`,
      method: 'post',
      body: data
    });

    switch (result.statusCode) {
      case httpStatusCode.badRequest:
        return left(result.body);

      case httpStatusCode.noContent:
        return left(result.body);

      case httpStatusCode.serverError:
        return left(result.body);

      case httpStatusCode.ok:
        this.localStorage.set<{ token: string }>({ key: 'kanban-token', data: { token: result.body?.token } });
        return right(result.body);
      default:
        return left('Internal Server Error');
    }
  }

  async sign(data: IUserUseCase.SignOutput): IUserUseCase.SignOutput {
    const result = await this.httpClient.request({
      url: `${this.apiAddress}/user/sign`,
      method: 'post',
      body: data
    });

    switch (result.statusCode) {
      case httpStatusCode.badRequest:
        return left(result.body);

      case httpStatusCode.noContent:
        return left(result.body);

      case httpStatusCode.serverError:
        return left(result.body);

      case httpStatusCode.create:
        this.localStorage.set<{ token: string }>({ key: 'kanban-token', data: { token: result.body?.token } });
        return right(result.body);
      default:
        return left('Internal Server Error');
    }
  }

  async getId(data: IUserUseCase.GetIdInput): IUserUseCase.GetIdOutput {
    const query = `?id=${data.id}`;
    const result = await this.httpClient.request({
      url: `${this.apiAddress}/user/search${query}`,
      method: 'get'
    });

    switch (result.statusCode) {
      case httpStatusCode.badRequest:
        return left(result.body);

      case httpStatusCode.noContent:
        return left(result.body);

      case httpStatusCode.serverError:
        return left(result.body);

      case httpStatusCode.ok:
        return right(result.body);
      default:
        return left('Internal Server Error');
    }
  }

  async getToken(data: IUserUseCase.GetTokenInput): IUserUseCase.GetTokenOutput {
    const result = await this.httpClient.request({
      url: `${this.apiAddress}/token`,
      method: 'post',
      body: data
    });

    switch (result.statusCode) {
      case httpStatusCode.badRequest:
        return left(result.body);

      case httpStatusCode.unauthorized:
        return left(result.body);

      case httpStatusCode.noContent:
        return left(result.body);

      case httpStatusCode.serverError:
        return left(result.body);

      case httpStatusCode.ok:
        return right(result.body);
      default:
        return left('Internal Server Error');
    }
  }
}
