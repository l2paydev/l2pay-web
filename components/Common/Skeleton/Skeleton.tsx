import { cn } from 'utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-[#a8b3cf14] backdrop-blur-sm',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
