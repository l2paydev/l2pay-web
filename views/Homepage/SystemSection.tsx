import { routes } from '@/configs';
import { cn, getIdSectionByHash } from '@/utils';
import Image from 'next/image';
import img from '~/static/images/system/0.png';

export function SystemSection({ className }: { className?: string }) {
  return (
    <div
      id={getIdSectionByHash(routes.cores)}
      className={cn(
        'layout-container  mx-auto h-screen w-full flex-col items-center justify-center pt-40 ',
        className
      )}
    >
      <div className="text-center">
        <h2 className="text-[40px] font-bold leading-[84px]">
          <span className="text-white">How L2PAY payment system </span>
          <span className="bg-linear-1 bg-clip-text text-transparent">
            Work
          </span>
        </h2>
      </div>
      <div className=" mt-8 flex justify-center ">
        <Image className="h-full w-auto" src={img} alt={'image system'} />
      </div>
    </div>
  );
}
