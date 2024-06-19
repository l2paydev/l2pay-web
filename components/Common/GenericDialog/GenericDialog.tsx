'use client';
import { useEffect, useState } from 'react';
import { cn } from 'utils';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from 'components/Common/Dialog/Dialog';
import CloseIcon from '~/static/images/common/close.svg';

type FacetsModalProps = {
  open?: boolean;
  onOpenChange?: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export const GenericDialog = ({
  open,
  onOpenChange,
  title,
  children,
  className,
}: FacetsModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onPointerDownOutside={e => e.preventDefault()}
        className={cn('border-none', className)}
      >
        <DialogHeader>
          {!!title && <DialogTitle>{title}</DialogTitle>}
        </DialogHeader>
        {children}
        <DialogClose
          className=" absolute  -right-8 top-20 rounded-full   transition-all  duration-300  hover:scale-[103%] hover:opacity-100
        focus:outline-none active:scale-[97%]
        disabled:pointer-events-none"
        >
          <CloseIcon className="size-8" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
