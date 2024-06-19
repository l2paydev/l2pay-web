'use client';
import { type PropsWithChildren } from 'react';
import { useRef } from 'react';
import { Skeleton } from './Common/Skeleton/Skeleton';
import { useCopyToClipboard } from '@/hooks';
import CopyIcon from '~/static/images/common/copy.svg';
import CopiedIcon from '~/static/images/common/done.svg';

const Address = ({
  children,
  isLoading,
}: PropsWithChildren & { isLoading: boolean }) => {
  const [copy, copyToClipboard] = useCopyToClipboard();
  const ref = useRef<HTMLSpanElement>(null);

  const onCopy = async () => {
    if (ref.current?.textContent) {
      copyToClipboard(ref.current.textContent);
    }
  };
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between gap-1.5 ">
        {isLoading ? (
          <Skeleton className="mb-2 h-3 w-1/2" />
        ) : (
          <span className="text-base font-bold  leading-5 text-white  underline-offset-8">
            Address
          </span>
        )}
      </div>

      {isLoading ? (
        <Skeleton className="h-10 w-full" />
      ) : (
        <div className="flex w-full items-center gap-1 rounded-lg bg-black px-2 py-1.5">
          <div className="w-full">
            <span
              className=" line-clamp-2 break-all   text-base leading-[18px] text-white"
              ref={ref}
            >
              {children}
            </span>
          </div>
          <button onClick={onCopy}>
            {!copy ? (
              <CopyIcon className="size-4" />
            ) : (
              <CopiedIcon className="size-4" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Address;
