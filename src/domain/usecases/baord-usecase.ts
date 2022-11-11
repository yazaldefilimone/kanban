import { Either } from '~/shared/either';
import { Board } from '~/domain/entities';

export interface IBoardUseCase {
  create: (data: IBoardUseCase.createInput) => IBoardUseCase.createOutput;
  delete: (data: IBoardUseCase.deleteOutput) => IBoardUseCase.deleteOutput;
  getId: (data: IBoardUseCase.getIdInput) => IBoardUseCase.getIdOutput;
  getUserId: (data: IBoardUseCase.getUserIdInput) => IBoardUseCase.getUserIdOutput;
}

type successBoard = Board;
export namespace IBoardUseCase {
  export type createInput = Omit<successBoard, 'id'>;
  export type createOutput = Promise<Either<string, successBoard>>;
  export type deleteOutput = Promise<Either<string, successBoard>>;
  export type getIdInput = { id: string };
  export type getIdOutput = Promise<Either<string, Board>>;
  export type getUserIdInput = { id: string };
  export type getUserIdOutput = Promise<Either<string, successBoard[]>>;
}
