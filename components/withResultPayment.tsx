'use client';
import Image from 'next/image';

import { Skeleton } from './Common/Skeleton/Skeleton';
import { cn } from '@/utils';
import warningImg from '~/static/images/common/warning.png';

type WithResultPaymentProps = {
  status: 'success' | 'expired';
  className?: string;
  loading?: boolean;
};

const resultPayment = {
  success: warningImg,
  expired: warningImg,
};

const WithResultPayment = ({
  status = 'expired',
  className,
  loading = false,
}: WithResultPaymentProps) => {
  const currentImg = resultPayment[status];
  return (
    <div
      className={cn(
        'gap-.5 flex flex-col items-center text-base font-normal leading-normal text-white',
        className
      )}
    >
      {loading ? (
        <>
          <Skeleton className="size-[120px]" />
        </>
      ) : (
        <>
          <span className="block aspect-square">
            <Image
              width={127}
              height={120}
              alt={`${status}-img`}
              src={currentImg}
            />
          </span>
          <span className="font-bold uppercase">{status}!</span>
        </>
      )}
    </div>
  );
};

export default WithResultPayment;
