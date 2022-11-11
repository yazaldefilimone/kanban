import { IBoardUseCase } from '~/domain/usecases';
import { right, left } from '~/shared/either';
import { httpStatusCode, IHttpClient, ILocalStorage } from '~/application/protocols/services';

export class BoardUseCase implements IBoardUseCase {
  private readonly localStorage: ILocalStorage;
  private readonly httpClient: IHttpClient;
  private readonly apiAddress: string;
  constructor(localStorage: ILocalStorage, httpClient: IHttpClient, apiAddress: string) {
    this.localStorage = localStorage;
    this.httpClient = httpClient;
    this.apiAddress = apiAddress;
  }
  async create(data: IBoardUseCase.createInput): IBoardUseCase.createOutput {
    const result = await this.httpClient.request({
      url: `${this.apiAddress}/board/create`,
      method: 'post',
      body: data
    });

    switch (result.statusCode) {
      case httpStatusCode.badRequest:
        return left(result.body);

      case httpStatusCode.noContent:
        return left(result.body);

      case httpStatusCode.create:
        return right(result.body);
      default:
        return left('Internal Server Error');
    }
  }
  async delete(data: IBoardUseCase.deleteInput): IBoardUseCase.deleteOutput {
    const result = await this.httpClient.request({
      url: `${this.apiAddress}/board/delete`,
      method: 'delete',
      body: data
    });

    switch (result.statusCode) {
      case httpStatusCode.badRequest:
        return left(result.body);

      case httpStatusCode.noContent:
        return left(result.body);

      case httpStatusCode.ok:
        return right(result.body);
      default:
        return left('Internal Server Error');
    }
  }

  async getId(data: IBoardUseCase.getIdInput): IBoardUseCase.getIdOutput {
    const result = await this.httpClient.request({
      url: `${this.apiAddress}/board/getId`,
      method: 'get',
      query: data
    });

    switch (result.statusCode) {
      case httpStatusCode.badRequest:
        return left(result.body);

      case httpStatusCode.noContent:
        return left(result.body);

      case httpStatusCode.ok:
        return right(result.body);
      default:
        return left('Internal Server Error');
    }
  }
  async getUserId(data: IBoardUseCase.getUserIdInput): IBoardUseCase.getUserIdOutput {
    const result = await this.httpClient.request({
      url: `${this.apiAddress}/board/search`,
      method: 'get',
      query: data
    });

    switch (result.statusCode) {
      case httpStatusCode.badRequest:
        return left(result.body);

      case httpStatusCode.noContent:
        return left(result.body);

      case httpStatusCode.ok:
        return right(result.body);
      default:
        return left('Internal Server Error');
    }
  }
}
