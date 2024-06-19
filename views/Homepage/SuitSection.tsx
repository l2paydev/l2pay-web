import { cn } from '@/utils';
import Image from 'next/image';
import img1 from '~/static/images/best-suit/1.png';
import img2 from '~/static/images/best-suit/2.png';
import img3 from '~/static/images/best-suit/3.png';
import img4 from '~/static/images/best-suit/4.png';
import img5 from '~/static/images/best-suit/5.png';
import img6 from '~/static/images/best-suit/6.png';

export function SuitSection({ className }: { className?: string }) {
  const items = [
    {
      label: 'Marketplace',
      img: img1,
    },
    {
      label: 'Trading Platform',
      img: img2,
    },
    {
      label: 'TGE',
      img: img3,
    },
    {
      label: 'Payments Providers',
      img: img4,
    },
    {
      label: 'Ecommerce',
      img: img5,
    },
    {
      label: 'Gamefi',
      img: img6,
    },
  ];
  return (
    <div
      className={cn(
        'mx-auto  h-screen w-full max-w-screen-xl flex-col items-center justify-center pt-20 ',
        className
      )}
    >
      <div className="text-center">
        <h2 className="text-[40px] font-bold leading-[84px]">
          <span className="text-white">Best Suited </span>
          <span className="bg-linear-1 bg-clip-text text-transparent ">
            For
          </span>
        </h2>
      </div>
      <ul className="mt-10 grid grid-cols-3 gap-4">
        {items?.map(({ img, label }, i) => {
          return (
            <li key={i}>
              <h4 className="text-lg font-bold text-white">{label}</h4>
              <div className="mt-4 flex aspect-[410/160] w-full flex-1 items-center justify-center bg-card-suit bg-cover px-6 py-3 text-center text-lg ">
                <Image className="h-full w-auto" src={img} alt={label} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
