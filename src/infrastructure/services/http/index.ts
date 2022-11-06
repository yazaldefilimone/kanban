import { httpRequestType, HttpResponse, IHttpClient } from '~/application/protocols/services';

export class HttpClient<R = any> implements IHttpClient {
  async request(data: httpRequestType): Promise<HttpResponse<R>> {
    const body: ReadableStream<Uint8Array> = data.body ? (JSON.stringify(data.body) as any) : null;

    const response = await fetch(data.url, {
      method: data.method.toLocaleUpperCase(),
      headers: data.headers,
      body
    });

    const result = await response.json();

    return result;
  }
}
