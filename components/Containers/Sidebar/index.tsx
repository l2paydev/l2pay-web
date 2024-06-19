import type { ComponentProps, FC } from 'react';

import SidebarGroup from '@/components/Containers/Sidebar/SidebarGroup';

type SidebarProps = {
  groups: Array<ComponentProps<typeof SidebarGroup>>;
};

const SideBar: FC<SidebarProps> = ({ groups }) => {
  // const pathname = usePathname();

  // const selectItems = groups.map(({ items, groupName }) => ({
  //   label: groupName,
  //   items: items.map(({ label, link }) => ({ value: link, label })),
  // }));

  return (
    <aside>
      {groups.map(({ groupName, items }) => (
        <SidebarGroup
          key={groupName.toString()}
          groupName={groupName}
          items={items}
        />
      ))}
    </aside>
  );
};

export default SideBar;
