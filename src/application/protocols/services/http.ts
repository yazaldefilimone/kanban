/* eslint-disable @typescript-eslint/no-explicit-any */
export type httpRequestType = {
  url: string;
  method: httpMethodType;
  body?: any;
  headers?: any;
};

export interface IHttpClient<R = any> {
  request: (data: httpRequestType) => Promise<HttpResponse<R>>;
}

export type httpMethodType = 'post' | 'get' | 'put' | 'delete';

export enum httpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T = any> = {
  statusCode: httpStatusCode;
  body?: T;
};
