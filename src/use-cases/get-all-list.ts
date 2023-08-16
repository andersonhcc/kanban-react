import { HttpClient, HttpStatusCode } from './gateways';
import {
  ServerError,
  UnknownError,
} from './erros';

import { GetAllListUseCase } from '../domain/get-all-list';

export class GetAllListImplements implements GetAllListUseCase {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetAllListUseCase.Output>
  ) {}

  public async execute(
  ): Promise<GetAllListUseCase.Output> {
    const response = await this.httpClient.request({
      url: `${this.url}`,
      method: 'get',
    });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.data as GetAllListUseCase.Output;
      case HttpStatusCode.serverError:
        throw new ServerError();
      default:
        throw new UnknownError();
    }
  }
}
