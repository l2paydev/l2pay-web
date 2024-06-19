import NextLink from 'next/link';
import type { ComponentProps, FC } from 'react';

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  href?: string;
};

const Link: FC<LinkProps> = ({ children, href, ...props }) => {
  if (!href || href.toString().startsWith('http')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href?.toString()} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
