'use client';

import type { FC, HTMLAttributeAnchorTarget } from 'react';

import { Button } from '@/components/Common/Button/Button';
import NavItem from '@/components/Containers/NavBar/NavItem';
import Link from '@/components/Link';
import WithLogo from '@/components/withLogo';
import { routes } from '@/configs';
import { useHash } from '@/hooks';
import type { FormattedMessage } from '@/types';

type NavbarProps = {
  navItems: Array<{
    text: FormattedMessage;
    link: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }>;
};

const NavBar: FC<NavbarProps> = ({ navItems }) => {
  const { updateHash } = useHash();
  return (
    <nav className="layout-container  fixed left-1/2 top-10 z-50 flex h-[88px] -translate-x-1/2 items-center justify-between  rounded-xl bg-nav px-5 py-3.5  backdrop-blur-lg 2xl:top-[60px]">
      <div>
        <Link
          onClick={() => updateHash('/')}
          href={routes.home}
          aria-label="Home"
        >
          <WithLogo />
        </Link>
      </div>
      <div className="hidden space-x-6 lg:block">
        {navItems.map(({ text, link, target }) => (
          <NavItem key={link} href={link} target={target} label={text}>
            {text}
          </NavItem>
        ))}
      </div>
      <div>
        <Link target="_blank" href={routes.dashboard}>
          <Button size={'xl'}>Paying</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
