'use client';
import { useRef } from 'react';
import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Skeleton } from './Common/Skeleton/Skeleton';
import { useCopyToClipboard } from '@/hooks';
import CopyIcon from '~/static/images/common/copy.svg';
import CopiedIcon from '~/static/images/common/done.svg';

type CopyProps = {
  className?: string;
  label?: string;
  leftContent?: ReactNode;
  isLoading?: boolean;
};

const WithCopy: FC<PropsWithChildren<CopyProps>> = ({
  children,
  label,
  leftContent,
  isLoading = false,
}) => {
  const [copy, copyToClipboard] = useCopyToClipboard();
  const ref = useRef<HTMLSpanElement>(null);
  const onCopy = async () => {
    if (ref.current?.textContent) {
      copyToClipboard(ref.current.textContent);
    }
  };
  return (
    <div className="w-full space-y-2">
      {isLoading ? (
        <Skeleton className="h-3 w-1/2" />
      ) : (
        <span className="text-base font-bold  leading-5 text-white  underline-offset-8">
          {label}
        </span>
      )}

      {isLoading ? (
        <Skeleton className="h-9 w-full" />
      ) : (
        <div className="flex w-full items-center gap-2 rounded-lg bg-black px-2 py-1.5">
          <div className="flex w-full items-center justify-between gap-2 text-base text-white">
            {leftContent}
            <span
              className=" line-clamp-2 break-all   text-base  text-white"
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

export default WithCopy;
