'use client';
import { GenericDialog } from '@/components/Common/GenericDialog/GenericDialog';
import WithResultPayment from '@/components/withResultPayment';
import WithStatusPayment from '@/components/withStatusPayment';
import { routes } from '@/configs';
import { usePathname } from '@/hooks';
import { PaymentDetail } from '@/types/payment';
import { useRouter } from 'next/navigation';
import PaymentInfo from './PaymentInfo';
import { Skeleton } from '@/components/Common/Skeleton/Skeleton';
interface PaymentResultProps {
  paymentInfo: PaymentDetail;
  paymentId: string;
  loading: boolean;
}

const PaymentResult = ({
  paymentId,
  paymentInfo,
  loading,
}: PaymentResultProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { state, ...restPaymentInfo } = paymentInfo || {};
  return (
    <GenericDialog
      className="gap-2.5"
      title="Payment status"
      open={pathname === `${routes.payment}/${paymentId}`}
      onOpenChange={() => router.push(routes.home)}
    >
      <WithStatusPayment status={state} className="absolute right-9 top-7 " />
      <div className="w-full  max-w-lg rounded-2xl bg-linear-3 p-[1px]">
        <div className="h-full w-full space-y-4 rounded-2xl bg-dark-0 p-6">
          <WithResultPayment loading={loading} status="expired" />
          {loading ? (
            <div className="space-y-2.5">
              <Skeleton className="h-3 w-full rounded-full" />
              <Skeleton className="h-3 w-full rounded-full" />
              <Skeleton className="h-3 w-full rounded-full" />
              <Skeleton className="h-3 w-full rounded-full" />
              <Skeleton className="h-3 w-full rounded-full" />
            </div>
          ) : (
            <>
              <p className="text-left text-xs tracking-[-0.6px] text-white">
                10 minutes since your transaction has been initiated, so L2Pay
                cannot process your transaction at fixed rate.. Please contact
                your service provider.
              </p>
              <div className="rounded-md border border-primary-2 p-2">
                <p className="text-left text-xs tracking-[-0.6px] text-white">
                  If you have already sent the deposit for this transaction,
                  kindly contact us and provide the transaction hash at
                  support@l2pay.ing
                </p>
              </div>
            </>
          )}

          <PaymentInfo loading={loading} paymentInfo={restPaymentInfo} />
        </div>
      </div>
    </GenericDialog>
  );
};

export default PaymentResult;
