import axios, { AxiosResponse } from 'axios';
import { httpRequestType, HttpResponse, IHttpClient } from '~/application/protocols/services';

export class HttpClient<R = any> implements IHttpClient {
  async request(data: httpRequestType): Promise<HttpResponse<R>> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    };
  }
}
