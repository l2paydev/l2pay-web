'use client';
import type { FC } from 'react';

import NavBar from '@/components/Containers/NavBar';
import { navigationItems } from '@/configs';

const WithNavBar: FC = () => {
  return (
    <NavBar
      navItems={navigationItems.map(({ label, href, target }) => ({
        text: label,
        link: href,
        target,
      }))}
    />
  );
};

export default WithNavBar;
