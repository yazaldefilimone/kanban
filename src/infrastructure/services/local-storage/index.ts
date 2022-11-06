/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILocalStorage } from '~/application/protocols/services';

export class LocalStorage implements ILocalStorage {
  get<TypeGet>(data: { key: string }): TypeGet {
    const metadata = window.localStorage.getItem(data.key);
    if (!metadata) {
      return metadata as any;
    }
    const result: TypeGet = JSON.parse(metadata);
    return result;
  }

  set<T>(data: { key: string; data: T }): void {
    const payload = JSON.stringify(data);
    window.localStorage.setItem(data.key, payload);
  }
}
