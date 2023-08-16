import { ListModel } from './models';

import { UseCase } from './base';

export interface GetAllListUseCase extends UseCase {
  execute: () => Promise<GetAllListUseCase.Output>;
}

export namespace GetAllListUseCase {
  export type Output = {
      list: ListModel[];
  };
}
