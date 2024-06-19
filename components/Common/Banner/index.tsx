import type { FC, PropsWithChildren } from 'react';

type BannerProps = {
  link?: string;
  type?: 'default' | 'warning' | 'error';
};

const Banner: FC<PropsWithChildren<BannerProps>> = ({ children }) => (
  <div className={``}>{children}</div>
);

export default Banner;
