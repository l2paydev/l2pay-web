'use client';
import Image from 'next/image';
import { StatePayment } from '@/types/payment';
import { cn } from '@/utils';
import clockImg from '~/static/images/common/clock.gif';
import expiredImg from '~/static/images/common/expired.png';
import processingImg from '~/static/images/common/processing.gif';
import succesImg from '~/static/images/common/succes.gif';

type WithStatusPaymentProps = {
  status?: StatePayment;
  className?: string;
};

const statusPaymentImg = {
  OPEN: clockImg,
  PROCESSING: processingImg,
  SUCCEED: succesImg,
  EXPIRED: expiredImg,
};
const statusPaymentLabel = {
  OPEN: 'Waiting',
  PROCESSING: 'Waiting',
  SUCCEED: 'Succeed',
  EXPIRED: 'Expried',
};

const WithStatusPayment = ({
  status = 'OPEN',
  className,
}: WithStatusPaymentProps) => {
  const currentImg = statusPaymentImg[status];
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-[24px] font-normal leading-normal text-white',
        className
      )}
    >
      <span className="block aspect-square">
        <Image width={24} height={24} alt={`${status}-img`} src={currentImg} />
      </span>
      <span className="capitalize">{statusPaymentLabel[status]}</span>
    </div>
  );
};

export default WithStatusPayment;
