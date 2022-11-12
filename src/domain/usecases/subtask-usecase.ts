import { Either } from '~/shared/either';
import { SubTask } from '~/domain/entities';

export interface ISubTaskUseCase {
  create: (data: ISubTaskUseCase.createInput) => ISubTaskUseCase.createOutput;
  delete: (data: ISubTaskUseCase.deleteInput) => ISubTaskUseCase.deleteOutput;
  getTaskId: (data: ISubTaskUseCase.getTaskIdInput) => ISubTaskUseCase.getTaskIdOutput;
}

type successTask = SubTask;
export namespace ISubTaskUseCase {
  export type createInput = Omit<successTask, 'id'>;
  export type createOutput = Promise<Either<string, successTask>>;
  export type deleteOutput = Promise<Either<string, successTask>>;
  export type deleteInput = { id: string };
  export type getTaskIdInput = { id: string };
  export type getTaskIdOutput = Promise<Either<string, successTask[]>>;
}
