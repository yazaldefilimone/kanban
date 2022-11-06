export interface ILocalStorage<TypeGet> {
  get(data: { key: string }): TypeGet;
  set<T>(data: { key: string; data: T }): void;
}
