import { routes } from '@/configs';
import { cn, getIdSectionByHash } from '@/utils';
import Image from 'next/image';
import img1 from '~/static/images/integration/1.png';

export function IntegrationSection({ className }: { className?: string }) {
  return (
    <div
      id={getIdSectionByHash(routes.ecosystem)}
      className={cn(
        'mx-auto  w-full max-w-screen-xl flex-col items-center justify-center py-20 ',
        className
      )}
    >
      <div className="text-center">
        <h2 className="text-[40px] font-bold leading-[84px]">
          <span className="text-white">Easy</span>
          <span className="bg-linear-1 bg-clip-text text-transparent ">
            Integration
          </span>
        </h2>
      </div>
      <div className="">
        <Image
          width={803}
          height={665}
          src={img1}
          className="mx-auto"
          alt={'intergration image'}
        />
      </div>
    </div>
  );
}
