export interface ILocalStorage<TypeGet> {
  get: () => TypeGet;
  set: () => void;
}
