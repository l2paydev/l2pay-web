import type { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

import ActiveLink from '@/components/Common/ActiveLink';

// import styles from './index.module.css';
import type { FormattedMessage } from '@/types';

type NavItemType = 'nav' | 'footer';

export type NavItemProps = {
  href: string;
  type?: NavItemType;
  label: FormattedMessage;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({
  href = '',
  children,
  target,
}) => (
  <ActiveLink
    href={href}
    // className={cn(styles.navItem, styles[type])}
    activeClassName="bg-linear-1"
    className="bg-white bg-clip-text text-xl text-transparent"
    allowSubPath={href.startsWith('/')}
    target={target}
  >
    {children}
  </ActiveLink>
);

export default NavItem;
