import axios, { AxiosError } from 'axios';
import { HttpClient, HttpResponse } from '../../use-cases/gateways/client';

export class AxiosHttpClient implements HttpClient {
  public async request(data: {
    url: string;
    method: 'post' | 'get' | 'patch' | 'put' | 'delete';
    body?: any;
    headers?: any;
  }): Promise<HttpResponse<any>> {
    try {
      const response = await axios.request<HttpResponse<any>>({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });

      return {
        statusCode: response.status,
        body: response.data.body,
        data: response.data,
      };
    } catch (err) {
      const error: AxiosError<HttpResponse<any>> = err as any;
      return {
        statusCode: error.response?.status as number,
        body: error.response?.data.body as any,
      };
    }
  }
}
