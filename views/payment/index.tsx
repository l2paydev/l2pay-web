'use client';

import { usePaymentDetailQuery } from '@/data';
import PaymentProcessing from './@components/PaymentProcessing';
import PaymentResult from './@components/PaymentResult';
import { PaymentDetail } from '@/types/payment';
import { useMediaQuery } from '@/hooks';

const PaymentView = ({ paymentId }: { paymentId: string }) => {
  const { paymentInfo, isLoading } = usePaymentDetailQuery({ id: paymentId });
  const { state } = paymentInfo || {};
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const isPaymentResult = state && state == 'EXPIRED';
  if (isMobile) return <></>;
  return (
    <div className="hidden h-full w-full bg-black  bg-banner-x bg-cover bg-no-repeat lg:block">
      <>
        {isPaymentResult ? (
          <PaymentResult
            loading={isLoading}
            paymentInfo={paymentInfo as PaymentDetail}
            paymentId={paymentId}
          />
        ) : (
          <PaymentProcessing
            loading={isLoading}
            paymentInfo={paymentInfo as PaymentDetail}
            paymentId={paymentId}
          />
        )}
      </>
    </div>
  );
};

export default PaymentView;
