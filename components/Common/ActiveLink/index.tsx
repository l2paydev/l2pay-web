'use client';

import type { ComponentProps, FC } from 'react';

import Link from '@/components/Link';
import { useHash, usePathname } from '@/hooks';
import { cn } from '@/utils';

type ActiveLocalizedLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
  allowSubPath?: boolean;
};

const ActiveLink: FC<ActiveLocalizedLinkProps> = ({
  children,
  activeClassName = 'active',
  allowSubPath = false,
  className,
  href = '#',
  ...props
}) => {
  const pathname = usePathname();
  const { hash, updateHash } = useHash();
  const finalClassName = cn(className, {
    [activeClassName]: allowSubPath
      ? // When using allowSubPath we want only to check if
        // the current pathname starts with the utmost upper level
        // of an href (e.g. /docs/...)
        pathname.startsWith(`/${href.toString().split('/')[1]}`)
      : href.toString() === hash,
    // : href.toString() === pathname,
  });
  return (
    <Link
      onClick={() => {
        if (href.startsWith('#')) updateHash(href);
      }}
      className={finalClassName}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
