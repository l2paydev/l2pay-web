'use client';
import { Skeleton } from '@/components/Common/Skeleton/Skeleton';
import WithCopy from '@/components/withCopy';
import { useIsMounted } from '@/hooks';
import { PaymentDetail } from '@/types/payment';
import { getUrlImage } from '@/utils';
import Image from 'next/image';
import blockImg from '~/static/images/common/block.png';
type PaymentInfoProps = {
  paymentInfo: Partial<PaymentDetail>;
  loading?: boolean;
};

const PaymentInfo = ({ paymentInfo, loading = false }: PaymentInfoProps) => {
  const {
    external_order_id,
    external_order_title,
    external_order_desc,
    id,
    external_image_url,
  } = paymentInfo || {};

  const isMounted = useIsMounted();

  const isLoader = !isMounted || loading;

  return (
    <>
      <WithCopy
        isLoading={isLoader}
        leftContent="Payment ID:"
        label="L2Pay order detail"
      >
        {id}
      </WithCopy>
      <div className="space-y-2">
        <WithCopy
          isLoading={isLoader}
          leftContent="Order ID:"
          label="Merchant order detail"
        >
          {external_order_id}
        </WithCopy>
        <div className="flex items-center  gap-6">
          {isLoader ? (
            <div>
              <Skeleton className="size-10" />
            </div>
          ) : (
            <div className="w-fit rounded-md bg-black p-[5px]">
              <Image
                src={getUrlImage(external_image_url, blockImg)}
                width={40}
                height={40}
                sizes="40px"
                alt="blockImg"
              />
            </div>
          )}

          {isLoader ? (
            <div className="flex w-full flex-col gap-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ) : (
            <div className="text-white">
              <p className="text-base font-bold">{'external_order_title'} </p>
              <p className="text-base">{'external_order_desc'}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;
