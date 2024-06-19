import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import client from '@/data/client';

import {
  PaymentDetailResponse,
  PaymentInput,
  RateUsdResponse,
  StatePayment,
} from '@/types/payment';
import { API_ENDPOINTS } from './client/endpoints';
import { useRouter } from 'next/navigation';
import { routes } from '@/configs';
import { toast } from 'sonner';
export const useRateUsdQuery = () => {
  const { data, isLoading, error, isSuccess, refetch } = useQuery<
    RateUsdResponse,
    Error
  >({
    queryKey: [`${API_ENDPOINTS.RATE_USD}?tokens=eth,strk&currencies=usd`],
    queryFn: ({ signal }) => client.rateUsd({ signal }),
  });

  return {
    ethInfo: data?.rates.ETH,
    strkInfo: data?.rates.STRK,
    isLoading,
    error,
    isSuccess,
  };
};

export const usePaymentDetailQuery = ({ id }: PaymentInput) => {
  const router = useRouter();

  const nofify = useCallback(() => {
    if (id) toast.success('Payment Success');
  }, [id]);
  const TIME_POLLING = 5000;
  const { data, isLoading, error, isSuccess } = useQuery<
    PaymentDetailResponse,
    Error
  >({
    queryKey: [`${API_ENDPOINTS.PAYMENTS}/${id}`],
    queryFn: ({ signal }) => client.paymentDetail({ signal, id }),
    enabled: !!id,
    refetchInterval(query) {
      const statePayment = query?.state?.data?.state;
      if (statePayment === 'EXPIRED') {
        // router.push(`${routes.payment}/${id}?status=${statePayment}`);
        return false;
      }
      if (statePayment === 'SUCCEED') {
        // nofify(statePayment);
        // toast.success('Payment Success');
        // console.log('statePayment', statePayment);
        return false;
      }
      return TIME_POLLING;
    },
    refetchIntervalInBackground: true,
  });

  return {
    paymentInfo: data,
    isLoading,
    error,
    isSuccess,
  };
};
