export interface ILocalStorage {
  get<TypeGet>(data: { key: string }): TypeGet;
  set<T>(data: { key: string; data: T }): void;
}
