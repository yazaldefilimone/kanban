import { Either } from '~/shared/either';
import { User } from '~/domain/entities';

export interface IUserUseCase {
  login: (data: IUserUseCase.LoginInput) => IUserUseCase.LoginOutput;
  sign: (data: IUserUseCase.SignOutput) => IUserUseCase.SignOutput;
  getId: (data: IUserUseCase.GetIdInput) => IUserUseCase.GetIdOutput;
  getToken: (data: IUserUseCase.GetTokenInput) => IUserUseCase.GetTokenOutput;
}

type successUser = { token: string; id: string };
export namespace IUserUseCase {
  export type LoginInput = { email: string; password: string };
  export type LoginOutput = Promise<Either<string, successUser>>;
  export type SignInput = User;
  export type SignOutput = Promise<Either<string, successUser>>;
  export type GetIdInput = { id: string };
  export type GetIdOutput = Promise<Either<string, User>>;
  export type GetTokenInput = { token: string };
  export type GetTokenOutput = Promise<Either<string, User>>;
}
