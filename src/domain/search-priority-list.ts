import { ListModel } from './models';

import { UseCase } from './base';

export interface SearchPriorityListUseCase extends UseCase {
  execute: (input: SearchPriorityListUseCase.Input) => Promise<SearchPriorityListUseCase.Output>;
}

export namespace SearchPriorityListUseCase {
  export type Input = {
    priority: string;
};

  export type Output = {
      list: ListModel[];
  };
}
