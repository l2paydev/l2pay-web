import { NavItemProps } from '@/components/Containers/NavBar/NavItem';
import { routes } from './routes';
export const navigationItems: NavItemProps[] = [
  {
    label: 'Models',
    href: routes.models,
    target: '_self',
    type: 'nav',
  },
  {
    label: 'Cores',
    href: routes.cores,
    target: '_self',
    type: 'nav',
  },
  {
    label: 'Ecosystem',
    href: routes.ecosystem,
    target: '_self',
    type: 'nav',
  },
  {
    label: 'Roadmap',
    href: routes.roadmap,
    target: '_self',
    type: 'nav',
  },
  {
    label: 'Docs',
    href: '#comming-soon',
    target: '_self',
    type: 'nav',
  },
  {
    label: 'Developer',
    href: routes.developer,
    target: '_blank',
    type: 'nav',
  },
];
