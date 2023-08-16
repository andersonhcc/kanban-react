import { HttpClient, HttpStatusCode } from './gateways';
import {
  ServerError,
  UnknownError,
} from './erros';

import { SearchPriorityListUseCase } from '../domain/search-priority-list';

export class SearchPriorityListImp implements SearchPriorityListUseCase {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<SearchPriorityListUseCase.Output>
  ) {}

  public async execute(
    input: SearchPriorityListUseCase.Input
  ): Promise<SearchPriorityListUseCase.Output> {
    const response = await this.httpClient.request({
      url: `${this.url}?prioridade=${input.priority}`,
      method: 'get',
    });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.data as SearchPriorityListUseCase.Output;
      case HttpStatusCode.serverError:
        throw new ServerError();
      default:
        throw new UnknownError();
    }
  }
}
