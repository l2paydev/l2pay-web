import { routes } from '@/configs';
import { cn, getIdSectionByHash } from '@/utils';

export function AboutSection({ className }: { className?: string }) {
  return (
    <div
      id={getIdSectionByHash(routes.models)}
      className="mx-auto aspect-[1600/1100] w-screen bg-about  bg-cover bg-bottom bg-no-repeat "
    >
      <div
        className={cn(
          'layout mx-auto flex h-screen w-full items-center justify-between pt-20 ',
          className
        )}
      >
        <div className="flex h-full w-full flex-col items-center justify-start text-center">
          <h3 className="text-[17px] font-extrabold leading-6 text-dark-0 ">
            ABOUT THE
          </h3>
          <h1 className="mt-2.5 text-[75px] font-bold leading-[91px] text-dark-0">
            L2PAY
          </h1>
          <p className="mt-4 max-w-3xl text-xl font-normal text-dark-0 2xl:text-2xl">
            Our innovative service enhances online sales for a broad spectrum of
            merchants and creators by offering a user-friendly, efficient
            cryptocurrency payment gateway, simplifying transactions and
            fostering increased digital market engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
