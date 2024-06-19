// import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';

import ActiveLink from '@/components/Common/ActiveLink';
// import type { FormattedMessage } from '@/types';

type SidebarItemProps = {
  label: string;
  //  FormattedMessage;
  link: string;
};

const SidebarItem: FC<SidebarItemProps> = ({ label, link }) => (
  <li>
    <ActiveLink href={link}>
      <span>{label}</span>

      {
        link.startsWith('http')
        //  && <ArrowUpRightIcon className={styles.icon} />}
      }
    </ActiveLink>
  </li>
);

export default SidebarItem;
