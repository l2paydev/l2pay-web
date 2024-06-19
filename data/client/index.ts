import { ISignal } from '@/types';
import { API_ENDPOINTS } from './endpoints';
import { HttpClient } from './http-client';
import { env } from '@/env.mjs';
import {
  PaymentDetailResponse,
  PaymentInput,
  RateUsdResponse,
} from '@/types/payment';

class Client {
  rateUsd = ({ signal }: ISignal) => {
    return HttpClient.get<RateUsdResponse>(
      `${API_ENDPOINTS.RATE_USD}`,
      {
        tokens: 'eth,strk',
        currencies: 'usd',
      },
      {
        signal,
        baseURL: env.API_RATE_USD,
      }
    );
  };
  paymentDetail = ({ signal, id }: PaymentInput) => {
    return HttpClient.get<PaymentDetailResponse>(
      `${API_ENDPOINTS.PAYMENTS}/${id}/`,
      null,
      { signal }
    );
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Client();
