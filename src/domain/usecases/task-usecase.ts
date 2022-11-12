import { Either } from '~/shared/either';
import { Task } from '~/domain/entities';

export interface ITaskUseCase {
  create: (data: ITaskUseCase.createInput) => ITaskUseCase.createOutput;
  delete: (data: ITaskUseCase.deleteInput) => ITaskUseCase.deleteOutput;
  getId: (data: ITaskUseCase.getIdInput) => ITaskUseCase.getIdOutput;
  getBoardId: (data: ITaskUseCase.getBoardIdInput) => ITaskUseCase.getBoardIdOutput;
}

type successTask = Task;
export namespace ITaskUseCase {
  export type createInput = Omit<successTask, 'id'>;
  export type createOutput = Promise<Either<string, successTask>>;
  export type deleteOutput = Promise<Either<string, successTask>>;
  export type deleteInput = { id: string };
  export type getIdInput = { id: string };
  export type getIdOutput = Promise<Either<string, Task>>;
  export type getBoardIdInput = { id: string };
  export type getBoardIdOutput = Promise<Either<string, successTask[]>>;
}
